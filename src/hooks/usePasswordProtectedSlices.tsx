import { useEffect, useState } from "react";
import { useApp } from "~hooks";

interface ISlice {
  _key: string;
  _type: string;
}

const usePasswordProtectedSlices = (slices: ISlice[], pageSlug: string) => {
  const [unlockedSlices, setUnlockedSlices] = useState<ISlice[]>([]);
  const { pagePasswordStatus, setPagePasswordStatus } = useApp();

  const pathname = pageSlug === `/` ? `/` : `/${pageSlug}/`;

  const passwordSlice = slices.find((slice) => slice._type === `password`);

  useEffect(() => {
    setPagePasswordStatus((prev) => {
      const pagesWithSavedState = Object.keys(prev);
      const pageHasSavedState = pagesWithSavedState.includes(pathname);

      if (pageHasSavedState) {
        return prev;
      }

      const updatedState = { ...prev };
      updatedState[pathname] = `locked`;
      return updatedState;
    });
  }, []);

  useEffect(() => {
    const pageIncludesPasswordSlice = passwordSlice ? true : false;

    if (!pageIncludesPasswordSlice) {
      setUnlockedSlices(slices);
      return;
    }

    const passwordSliceIndex = slices.indexOf(passwordSlice as ISlice);

    if (pagePasswordStatus[pathname] === `unlocked`) {
      const slicesBeforePasswordSlice = slices.slice(0, passwordSliceIndex);
      const slicesAfterPasswordSlice = slices.slice(passwordSliceIndex + 1);

      setUnlockedSlices([
        ...slicesBeforePasswordSlice,
        ...slicesAfterPasswordSlice
      ]);
      return;
    }

    // When password hasn't been entered
    setUnlockedSlices(slices.slice(0, passwordSliceIndex + 1)); // +1 to include the password slice
  }, [JSON.stringify(pagePasswordStatus)]);

  return { unlockedSlices };
};

export default usePasswordProtectedSlices;

import React from "react";
import { TSlice } from "~slices";
import * as Slices from "~slices";

interface IProps {
  data: {
    _type: string;
  };
}

const SanitySlice = (props: IProps) => {
  const { data } = props;
  const { _type: sliceType } = data;

  if (!sliceType) {
    console.error(
      `SanitySlice requires a valid _type, but none was received. Check the /templates/page file to ensure a valid slice type is being passed to the SanitySlice component.`
    );

    return null;
  }

  const sliceName = (sliceType[0].toUpperCase() +
    sliceType.slice(1, sliceType.length)) as TSlice;

  const SliceSection = Slices?.[sliceName];

  if (!SliceSection) {
    console.error(
      `Can't find Slice '${sliceName}', are you sure it has been configured in the slices directory?`
    );

    return null;
  }

  // @ts-ignore-next-line
  return <SliceSection {...props} />;
};

export default SanitySlice;

import { useState, useEffect } from "react";
import * as bp from "~styles/breakpoints.module.scss";

type TBreakpoint =
  | `giant`
  | `largeDesktop`
  | `desktop`
  | `smallDesktop`
  | `largeTablet`
  | `tablet`
  | `smallTablet`
  | `largeMobile`
  | `mobile`
  | `smallMobile`;

type TBreakpoints = {
  [key in TBreakpoint]: boolean;
};

const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState<TBreakpoints>({
    ...bp
  });

  const bpArray = Object.keys(bp);

  const parseBpStringToInt = (bpStringWithPx: string) =>
    parseInt(bpStringWithPx.replace(`px`, ``));

  useEffect(() => {
    const handleResize = () => {
      const updatedBreakpoints: TBreakpoints = {} as TBreakpoints;

      for (let i = 0; i < bpArray.length; i += 1) {
        updatedBreakpoints[bpArray[i] as TBreakpoint] =
          window.innerWidth >= parseBpStringToInt(bp[bpArray[i]]);
      }

      setBreakpoints(updatedBreakpoints);
    };

    window.addEventListener(`resize`, handleResize);

    handleResize();

    return () => window.removeEventListener(`resize`, handleResize);
  }, []);

  // ---------------------------------------------------------------------------
  // return

  return breakpoints;
};

export default useBreakpoints;

import React from "react";

// Icon library
import { ReactComponent as arrowDown } from "~assets/svg/arrow-down.svg";
import { ReactComponent as arrowLeft } from "~assets/svg/arrow-left.svg";
import { ReactComponent as arrowRight } from "~assets/svg/arrow-right.svg";
import { ReactComponent as lookingGlass } from "~assets/svg/looking-glass.svg";
import { ReactComponent as minus } from "~assets/svg/minus.svg";
import { ReactComponent as playCircle } from "~assets/svg/play-circle.svg";
import { ReactComponent as plus } from "~assets/svg/plus.svg";
import { ReactComponent as warningTriangle } from "~assets/svg/warning-triangle.svg";
import { ReactComponent as x } from "~assets/svg/x.svg";

// Custom
import { ReactComponent as wordmark } from "~assets/svg/wordmark.svg";

const svgs = Object.freeze({
  // Library
  arrowDown,
  arrowLeft,
  arrowRight,
  lookingGlass,
  minus,
  playCircle,
  plus,
  warningTriangle,
  x,
  // ... all icons as required
  wordmark
});

export type TSvg = keyof typeof svgs;

interface IProps {
  svg: TSvg;
  className?: string;
  style?: React.CSSProperties;
}

const SVG = ({ svg, ...props }: IProps) => {
  if (!svgs[svg]) return null;

  const SVGElement = svgs[svg];

  return <SVGElement {...props} aria-hidden />;
};

export default SVG;

import React from "react";
import cn from "classnames";
import { ISliceConfig } from "~schemas";
import * as styles from "./styles.module.scss";

interface IProps {
  children: React.ReactNode;
  config?: ISliceConfig;
}

interface ISliceConfigColors {
  color?: string;
  backgroundColor?: string;
}

const SliceConfig = ({ children, config }: IProps) => {
  const { backgroundColor, textColor, slicePadding } = config || {};
  const {
    paddingTop = `regular`,
    paddingBottom = `regular`,
    paddingX = `regular`
  } = slicePadding || {};

  const colorStyles: ISliceConfigColors = {};
  if (textColor?.hex) {
    colorStyles.color = textColor.hex;
  }
  if (backgroundColor?.hex) {
    colorStyles.backgroundColor = backgroundColor.hex;
  }

  return (
    <div
      style={colorStyles}
      className={cn(styles.container, {
        [styles.paddingTopRegular]: paddingTop === `regular`,
        [styles.paddingTopSmall]: paddingTop === `small`,
        [styles.paddingBottomRegular]: paddingBottom === `regular`,
        [styles.paddingBottomSmall]: paddingBottom === `small`,
        [styles.paddingXRegular]: paddingX === `regular`,
        [styles.paddingXSmall]: paddingX === `small`
      })}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SliceConfig;

import React, { useEffect, useState, useRef } from "react";
import cn from "classnames";
import { SliceConfig, Grid } from "~components";
import { useBreakpoints } from "~hooks";

import * as styles from "./styles.module.scss";
import { IDesignPrincipleBlock, ISliceConfig } from "~schemas";

const sliceConfigSettings: ISliceConfig = {
  slicePadding: {
    paddingTop: `small`,
    paddingBottom: `small`,
    paddingX: `regular`
  }
};

interface IProps extends IDesignPrincipleBlock {
  blockRefsArray: HTMLDivElement[];
  activeMobile: boolean;
}

const DesignPrincipleBlock = ({
  title,
  backgroundColor,
  principles,
  blockRefsArray,
  activeMobile
}: IProps) => {
  const [isColorVisible, setIsColorVisible] = useState(false);
  const [isPrinciplesVisible, setIsPrinciplesVisible] = useState(false);

  const { tablet: isPastBreakpoint } = useBreakpoints();

  const handleMouseEnter = () => {
    if (!isPastBreakpoint) return;
    setIsColorVisible(true);
    setIsPrinciplesVisible(true);
  };
  const handleMouseLeave = () => {
    if (!isPastBreakpoint) return;
    setIsColorVisible(false);
    setIsPrinciplesVisible(false);
  };

  useEffect(() => {
    if (isPastBreakpoint) {
      // Desktop
      setIsColorVisible(false);
      setIsPrinciplesVisible(false);
      return;
    }
    // Mobile
    if (activeMobile) {
      setIsColorVisible(true);
      setIsPrinciplesVisible(true);
    } else {
      setIsColorVisible(false);
      setIsPrinciplesVisible(true);
    }
  }, [isPastBreakpoint, activeMobile]);

  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blockRef.current) {
      blockRefsArray.push(blockRef.current);
    }
  }, []);

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={blockRef}
    >
      <div
        className={cn(styles.colorBackground, {
          [styles.visible]: isColorVisible
        })}
        style={{ backgroundColor: backgroundColor.hex }}
      />
      <SliceConfig config={sliceConfigSettings}>
        <Grid className={styles.content}>
          <h4 className={cn(`d1`, styles.title)}>{title}</h4>
          <div className={styles.principles}>
            {principles.map((principle, i) => (
              <div
                style={{ transitionDelay: `${i * 100}ms` }}
                key={i}
                className={cn(`h2`, styles.principle, {
                  [styles.visible]: isPrinciplesVisible
                })}
              >
                {principle}
              </div>
            ))}
          </div>
        </Grid>
      </SliceConfig>
    </div>
  );
};

export default DesignPrincipleBlock;

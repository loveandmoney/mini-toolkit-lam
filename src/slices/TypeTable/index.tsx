import React, { useEffect, useState } from "react";
import typography from "~data/typography.json";
import { SliceConfig, IntersectionAnimation } from "~components";
import cn from "classnames";
import { ISliceConfig } from "~schemas";
import { useInView } from "react-intersection-observer";
import * as styles from "./styles.module.scss";
import { useBreakpoints } from "~hooks";

type TTypographyStyle = {
  id: string;
  attributes: {
    [key: string]: string;
  };
  className: string;
};

type TTypographyBreakpoint = {
  min: number;
  max: number;
  styles: TTypographyStyle[];
};

type TPreviewText = {
  text: string;
  styleId: string;
};

interface IProps {
  data: {
    subheadingStyle: {
      style: string;
    };
    previewText: TPreviewText[];
    sliceConfig: ISliceConfig;
  };
}

const TypeTable = ({
  data: { subheadingStyle, sliceConfig, previewText }
}: IProps) => {
  const getBreakpointString = (breakpointObject: TTypographyBreakpoint) =>
    `${breakpointObject.min}px - ${
      breakpointObject.max === -1 ? `1920px+` : `${breakpointObject.max}px`
    }`;

  const [breakpoint, setBreakpoint] = useState(0);

  const getPreviewText = (styleId: string) =>
    previewText.find((text) => text.styleId === styleId)?.text;

  const { ref, inView } = useInView({
    rootMargin: `-90px`
  });

  const { tablet, largeTablet } = useBreakpoints();

  useEffect(() => {
    if (!tablet) {
      setBreakpoint(2);
    } else if (!largeTablet) {
      setBreakpoint(1);
    } else {
      setBreakpoint(0);
    }
  }, [tablet, largeTablet]);

  return (
    <section ref={ref} className={styles.container}>
      <SliceConfig config={sliceConfig}>
        <div className={cn(styles.toggleButtons, `caption`)}>
          {typography.map(
            (breakpointObject: TTypographyBreakpoint, index: number) => (
              <button
                className={cn({
                  [styles.activeOption]: breakpoint === index
                })}
                type="button"
                onClick={() => setBreakpoint(index)}
                key={index}
              >
                {getBreakpointString(breakpointObject)}
              </button>
            )
          )}
        </div>

        <div className={cn(styles.row, subheadingStyle?.style || `b2`)}>
          <div className={styles.narrowColumn}>Specimen</div>
          <div className={styles.wideColumn}>Preview</div>
          <div className={cn(styles.narrowColumn, styles.colRightAlign)}>
            Font-size
          </div>
          <div className={cn(styles.narrowColumn, styles.colRightAlign)}>
            Line-height
          </div>
          <div className={cn(styles.narrowColumn, styles.colRightAlign)}>
            Letter-spacing
          </div>
        </div>

        <div key={breakpoint}>
          {typography[breakpoint].styles.map(
            ({ id: styleId, attributes }: TTypographyStyle, j: number) => {
              if (!getPreviewText(styleId)) return null;

              return (
                <IntersectionAnimation
                  trigger={inView}
                  key={j}
                  delay={j * 100}
                  className={styles.specimenRow}
                >
                  <li className={styles.row}>
                    <div className={cn(styles.narrowColumn, `b2`)}>
                      {styleId}
                    </div>
                    <div
                      className={styles.wideColumn}
                      style={{ ...attributes }}
                    >
                      {getPreviewText(styleId)}
                    </div>

                    <div
                      className={cn(
                        styles.narrowColumn,
                        styles.colRightAlign,
                        `b2`
                      )}
                    >
                      {attributes.fontSize}
                    </div>
                    <div
                      className={cn(
                        styles.narrowColumn,
                        styles.colRightAlign,
                        `b2`
                      )}
                    >
                      {attributes.lineHeight}
                    </div>
                    <div
                      className={cn(
                        styles.narrowColumn,
                        styles.colRightAlign,
                        `b2`
                      )}
                    >
                      {attributes.letterSpacing || `0em`}
                    </div>
                  </li>
                </IntersectionAnimation>
              );
            }
          )}
        </div>
      </SliceConfig>
    </section>
  );
};

export default TypeTable;

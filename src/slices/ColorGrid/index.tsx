import React from "react";
import { colors } from "~data";
import { SliceConfig, IntersectionAnimation, ColorGridTile } from "~components";
import { useInView } from "react-intersection-observer";
import { ISliceConfig } from "~schemas";
import * as styles from "./styles.module.scss";

interface IProps {
  data: {
    category: string;
    sliceConfig: ISliceConfig;
  };
}

const ColorGrid = ({ data: { category, sliceConfig } }: IProps) => {
  const { ref, inView } = useInView({
    rootMargin: `-90px`
  });

  return (
    <section>
      <SliceConfig config={sliceConfig}>
        <IntersectionAnimation>
          <ul className={styles.grid} ref={ref}>
            {colors.map((color, i) => (
              <ColorGridTile
                key={i}
                index={i}
                inView={inView}
                color={color}
                category={category}
              />
            ))}
          </ul>
        </IntersectionAnimation>
      </SliceConfig>
    </section>
  );
};

export default ColorGrid;

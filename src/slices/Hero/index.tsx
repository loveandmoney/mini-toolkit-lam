import React from "react";
import { SliceConfig, IntersectionAnimation } from "~components";
import { ISliceConfig } from "~schemas";
import * as styles from "./styles.module.scss";

interface IProps {
  data: {
    title: string;
    sliceConfig: ISliceConfig;
  };
}

const Hero = ({ data: { title, sliceConfig } }: IProps) => {
  return (
    <section>
      <SliceConfig config={sliceConfig}>
        <div className={styles.textContainer}>
          <IntersectionAnimation>
            <h1 className="d1">{title}</h1>
          </IntersectionAnimation>
        </div>
      </SliceConfig>
    </section>
  );
};

export default Hero;

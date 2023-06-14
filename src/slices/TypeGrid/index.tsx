import React from "react";
import {
  IntersectionAnimation,
  SliceConfig,
  TypeGrid as TypeGridComponent
} from "~components";
import { ISliceConfig } from "~schemas";

interface IProps {
  data: {
    toggleButtonStyle: {
      style: string;
    };
    sliceConfig: ISliceConfig;
  };
}

const TypeGrid = ({ data: { toggleButtonStyle, sliceConfig } }: IProps) => (
  <section>
    <SliceConfig config={sliceConfig}>
      <IntersectionAnimation>
        <TypeGridComponent
          toggleButtonStyle={toggleButtonStyle}
          backgroundColor={sliceConfig.backgroundColor?.hex}
        />
      </IntersectionAnimation>
    </SliceConfig>
  </section>
);

export default TypeGrid;

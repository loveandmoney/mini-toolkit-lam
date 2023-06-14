import React from "react";
import { SliceConfig, IntersectionAnimation } from "~components";
import { ISliceConfig } from "~schemas";
import { GatsbyImage } from "gatsby-plugin-image";

interface IProps {
  data: {
    image: {
      asset: {
        gatsbyImageData: any;
      };
    };
    sliceConfig: ISliceConfig;
  };
}

const SimpleImage = ({ data: { image, sliceConfig } }: IProps) => {
  if (!image) {
    return null;
  }

  return (
    <section>
      <SliceConfig config={sliceConfig}>
        <IntersectionAnimation animation="fadeGrow">
          <GatsbyImage
            style={{ width: `100%` }}
            alt=""
            image={image.asset.gatsbyImageData}
            objectFit="contain"
          />
        </IntersectionAnimation>
      </SliceConfig>
    </section>
  );
};

export default SimpleImage;

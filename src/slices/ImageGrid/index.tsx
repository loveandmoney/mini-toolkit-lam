import React from "react";
import { SliceConfig, IntersectionAnimation } from "~components";
import * as styles from "./styles.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { ISliceConfig } from "~schemas";

interface IProps {
  data: {
    images: {
      asset: {
        gatsbyImageData: any;
      };
    }[];
    sliceConfig: ISliceConfig;
  };
}

const ImageGrid = ({ data: { images, sliceConfig } }: IProps) => {
  if (!images?.[0]) {
    return null;
  }

  return (
    <section>
      <IntersectionAnimation>
        <SliceConfig config={sliceConfig}>
          <div className={styles.grid}>
            {images.map((image, i) => (
              <IntersectionAnimation
                animation="fadeGrow"
                delay={i * 100}
                key={i}
                className={styles.image}
              >
                <GatsbyImage
                  style={{ width: `100%`, height: `100%` }}
                  alt=""
                  image={image.asset.gatsbyImageData}
                />
              </IntersectionAnimation>
            ))}
          </div>
        </SliceConfig>
      </IntersectionAnimation>
    </section>
  );
};

export default ImageGrid;

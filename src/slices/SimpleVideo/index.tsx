import React from "react";
import { HTMLVideo, SliceConfig, IntersectionAnimation } from "~components";
import * as styles from "./styles.module.scss";

const SimpleVideo = ({ data: { videoURL, sliceConfig } }) => {
  if (!videoURL) {
    return null;
  }

  return (
    <section>
      <IntersectionAnimation>
        <SliceConfig config={sliceConfig}>
          <HTMLVideo
            className={styles.video}
            src={videoURL}
            autoPlay
            muted
            loop
            playsInline
          />
        </SliceConfig>
      </IntersectionAnimation>
    </section>
  );
};

export default SimpleVideo;

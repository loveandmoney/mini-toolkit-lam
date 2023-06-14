import React from "react";
import * as styles from "./styles.module.scss";
import { IVideoAtf } from "~schemas";

interface IProps {
  data: IVideoAtf;
}

const FeaturedText = ({ data: { url } }: IProps) => (
  <section className={styles.container}>
    <video playsInline muted loop autoPlay src={url} />
  </section>
);

export default FeaturedText;

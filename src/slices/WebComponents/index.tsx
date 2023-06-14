import React from "react";
import * as styles from "./styles.module.scss";
import { WebComponents as WebComponentsComponent } from "~components";

const WebComponents = () => {
  return (
    <div className={styles.container}>
      <WebComponentsComponent />
    </div>
  );
};

export default WebComponents;

import React from "react";
import * as styles from "./styles.module.scss";
import { Link } from "gatsby";

const NoJs = () => (
  <noscript>
    <div className={styles.container}>
      For full functionality of this site it is necessary to enable JavaScript.
      Here are the{` `}
      <Link to="https://www.enable-javascript.com/" aria-label="Enable JS">
        instructions how to enable JavaScript in your web browser.
      </Link>
    </div>
  </noscript>
);

export default NoJs;

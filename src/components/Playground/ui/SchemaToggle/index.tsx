import React from "react";
import cn from "classnames";
import { camelCaseToTitleCase } from "~utils";
import * as styles from "./styles.module.scss";

interface IProps {
  config: any;
  updateConfig: (field: string, value: any) => void;
  field: string;
}

const SchemaToggle = ({ config, updateConfig, field }: IProps) => (
  <div className={styles.schemaField}>
    <div className={styles.schemaLabel}>{camelCaseToTitleCase(field)}</div>
    <button
      className={cn(styles.schemaButton, {
        [styles.selected]: !config[field]
      })}
      type="button"
      onClick={() => updateConfig(field, false)}
    >
      Off
    </button>
    <button
      className={cn(styles.schemaButton, {
        [styles.selected]: config[field]
      })}
      type="button"
      onClick={() => updateConfig(field, true)}
    >
      On
    </button>
  </div>
);

export default SchemaToggle;

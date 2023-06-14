import React from "react";
import { camelCaseToTitleCase } from "~utils";
import * as styles from "./styles.module.scss";

interface IProps {
  config: any;
  updateConfig: (field: string, value: any) => void;
  field: string;
}

const SchemaFieldForm = ({ config, updateConfig, field }: IProps) => (
  <div className={styles.schemaField}>
    <div className={styles.schemaLabel}>{camelCaseToTitleCase(field)}</div>
    <input
      type="text"
      onChange={(e) => updateConfig(field, e.target.value)}
      value={config[field]}
    />
  </div>
);

export default SchemaFieldForm;

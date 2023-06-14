import React from "react";
import cn from "classnames";
import { camelCaseToTitleCase } from "~utils";
import * as styles from "./styles.module.scss";

interface IProps {
  config: any;
  updateConfig: (field: string, value: any) => void;
  field: string;
  options: string[];
}

const SchemaOptions = ({ config, updateConfig, field, options }: IProps) => (
  <div className={styles.schemaField}>
    <div className={styles.schemaLabel}>{camelCaseToTitleCase(field)}</div>

    {options.map((option) => (
      <button
        key={option}
        className={cn(styles.schemaButton, {
          [styles.selected]: config[field] === option
        })}
        type="button"
        onClick={() => updateConfig(field, option)}
      >
        {camelCaseToTitleCase(option)}
      </button>
    ))}
  </div>
);

export default SchemaOptions;

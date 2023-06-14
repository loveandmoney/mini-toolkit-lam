import React from "react";
import { Button } from "~components";
import * as styles from "./styles.module.scss";
import type { IBrief, ITemplate } from "../../types";

interface IProps {
  templates: ITemplate[];
  selectedTemplate: ITemplate | undefined;
  setBriefData: React.Dispatch<React.SetStateAction<IBrief>>;
}

const SelectTemplate = ({
  templates,
  selectedTemplate,
  setBriefData
}: IProps) => {
  return (
    <>
      <div className={styles.buttons}>
        {templates.map((template, i) => (
          <Button
            key={i}
            variant={
              selectedTemplate?.title === template.title
                ? `primary`
                : `secondary`
            }
            onClick={() =>
              setBriefData((prev) => ({
                ...prev,
                info: {
                  ...prev.info,
                  template
                }
              }))
            }
          >
            {template.title}
          </Button>
        ))}
      </div>
    </>
  );
};

export default SelectTemplate;

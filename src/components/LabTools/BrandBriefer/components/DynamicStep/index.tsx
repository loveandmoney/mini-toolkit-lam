import React from "react";
import type { IBrief, IStep } from "../../types";
import { TextInput } from "~components";
import * as styles from "./styles.module.scss";

interface IProps {
  briefData: IBrief;
  setBriefData: React.Dispatch<React.SetStateAction<IBrief>>;
  step: number;
}

const DynamicStep = ({ briefData, setBriefData, step }: IProps) => {
  const stepData = briefData.info.template?.steps[step] as IStep;

  const updateValue = (fieldId: string, value: string) => {
    setBriefData((prev) => ({
      ...prev,
      steps: {
        ...prev.steps,
        [stepData.id]: {
          info: { ...stepData },
          [fieldId]: {
            ...stepData.inputs.find((input) => input.id === fieldId),
            value
          }
        }
      }
    }));
  };

  return (
    <>
      {stepData?.inputs.map((input, i) => (
        <div key={i} className={styles.input}>
          {input.title && <h3 className={styles.fieldTitle}>{input.title}</h3>}
          {input.type === "string" && (
            <TextInput
              label={input.label}
              placeholder={input.placeholder}
              onChange={(value) => updateValue(input.title, value)}
            />
          )}
          {input.type === "text" && (
            <TextInput
              textarea
              label={input.label}
              placeholder={input.placeholder}
              onChange={(value) => updateValue(input.title, value)}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default DynamicStep;

import React from "react";
import type { IBrief } from "../../types";
import { TextInput } from "~components";
import * as styles from "./styles.module.scss";

interface IProps {
  briefData: IBrief;
  setBriefData: React.Dispatch<React.SetStateAction<IBrief>>;
}

const Tldr = ({ briefData, setBriefData }: IProps) => {
  return (
    <>
      <TextInput
        className={styles.input}
        placeholder="Enter TLDR..."
        textarea
        onChange={(value) =>
          setBriefData((prev) => ({
            ...prev,
            steps: {
              ...prev.steps,
              TLDR: value
            }
          }))
        }
        value={briefData.steps.TLDR}
      />
    </>
  );
};

export default Tldr;

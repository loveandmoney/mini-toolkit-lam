import React from "react";
import type { IBrief, IBriefInfo } from "../../types";
import { TextInput } from "~components";
import * as styles from "./styles.module.scss";

interface IProps {
  briefData: IBrief;
  setBriefData: React.Dispatch<React.SetStateAction<IBrief>>;
}

const Info = ({ briefData, setBriefData }: IProps) => {
  const updateValue = (field: keyof IBriefInfo, value: string) => {
    setBriefData((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        [field]: value
      }
    }));
  };

  return (
    <>
      <TextInput
        label="Brief Title"
        className={styles.input}
        placeholder="Enter title..."
        onChange={(value) => updateValue("title", value)}
        value={briefData.info.title}
      />
      <TextInput
        label="Author"
        className={styles.input}
        placeholder="Enter author..."
        onChange={(value) => updateValue("author", value)}
        value={briefData.info.author}
      />
      <TextInput
        label="Date"
        className={styles.input}
        placeholder="Enter date..."
        onChange={(value) => updateValue("date", value)}
        value={briefData.info.date}
      />
    </>
  );
};

export default Info;

import React from "react";
import * as styles from "./styles.module.scss";
import cn from "classnames";
import CustomInfo from "./components/CustomInfo";
import type { IBrief } from "../../types";

interface IProps {
  briefData: IBrief;
  setBriefData: React.Dispatch<React.SetStateAction<IBrief>>;
}

interface IMockResult {
  title: string;
  value: string;
}

const MOCK_DATA: IMockResult[] = [
  {
    title: `TL;DR`,
    value: `We're sprinting on the EUP Website Design, with the end goal of having a presentable website prototype by Tuesday EOD. We have Magic Moments for the design team to explore, a brand to tip in + a dev to collaborate ideas on with.`
  },
  {
    title: `Task Brief`,
    value: `Below is the day to day rundown for the sprint, with deliverables & dates.\n\nDanny, Adnaan & Pat will be providing more of the creative details for the brief below.`
  }
];

const Results = ({ briefData, setBriefData }: IProps) => {
  return (
    <>
      <h3 className={cn(`h2`, styles.title)}>
        {briefData.info.template?.title} - {briefData.info.title}
      </h3>
      <h4 className={cn(`h3`, styles.info)}>
        {briefData.info.author} - {briefData.info.date}
      </h4>
      {briefData.steps.TLDR && (
        <div className={styles.formSection}>
          <h3 className="h3">TL;DR</h3>
          <p className={cn(`b1`, styles.textAreaContent)}>
            {briefData.steps.TLDR}
          </p>
        </div>
      )}
      {briefData.customFields?.map((field, i) => (
        <div className={styles.formSection} key={i}>
          <h3 className="h3">{field.title}</h3>
          <p className={cn(`b1`, styles.textAreaContent)}>{field.value}</p>
        </div>
      ))}
      <CustomInfo setBriefData={setBriefData} />
    </>
  );
};

export default Results;

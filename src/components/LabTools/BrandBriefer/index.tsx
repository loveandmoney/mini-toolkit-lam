import React, { useEffect, useState } from "react";
import { Button, SliceConfig } from "~components";
import type { IBrief, ITemplate, TStep } from "./types";
import {
  SelectTemplate,
  Results,
  PdfDownloadButton,
  DynamicStep,
  Info,
  Tldr
} from "./components";
import * as styles from "./styles.module.scss";
import cn from "classnames";

interface IProps {
  templates: ITemplate[];
}

const initialBriefData: IBrief = {
  info: {
    author: ``,
    date: ``,
    template: {
      steps: [],
      title: ``
    },
    title: ``
  },
  customFields: [],
  steps: {
    TLDR: ``,
    "Task Brief": ``
  }
};

const BrandBriefer = ({ templates }: IProps) => {
  const [step, setStep] = useState<TStep>(`Template`);
  const [briefData, setBriefData] = useState<IBrief>(initialBriefData);

  const getStepTitle = () => {
    if (step === `Template`) return `Select Template`;
    if (step === `Info`) return `General Info`;
    if (step === `Results`) return ``;
    return `TL;DR`; // todo - update this
  };

  const renderStep = () => {
    if (step === `Template`) {
      return (
        <SelectTemplate
          templates={templates}
          selectedTemplate={briefData?.info?.template}
          setBriefData={setBriefData}
        />
      );
    } else if (step === `Info`) {
      return <Info briefData={briefData} setBriefData={setBriefData} />;
    } else if (step === `TLDR`) {
      return <Tldr briefData={briefData} setBriefData={setBriefData} />;
    } else if (step === `Results`) {
      return <Results briefData={briefData} setBriefData={setBriefData} />;
    }
    return null;

    // return (
    //   <DynamicStep
    //     step={step}
    //     briefData={briefData}
    //     setBriefData={setBriefData}
    //   />
    // );
  };

  const canProceedToNextStep = () => {
    if (step === `Template`) return !!briefData.info?.template?.title;
    if (step === `Info`)
      return !!(
        briefData.info?.author &&
        briefData.info?.date &&
        briefData.info?.title
      );
    if (step === `TLDR`) {
      return !!briefData.steps.TLDR;
    }
    // Logic for dynamic fields
    return false;
  };

  const handleBack = () => {
    setStep((prev) => {
      if (prev === `Results`) {
        // return (briefData.info.template?.steps.length as number) - 1;
        return `TLDR`;
      }
      if (prev === `TLDR`) {
        return `Info`;
      }
      if (prev === `Info`) {
        return `Template`;
      }
      if (prev === 0) {
        return `Info`;
      }
      return (prev as number) - 1;
    });
  };

  const handleNext = () => {
    setStep((prev) => {
      if (prev === `Template`) {
        return `Info`;
      }
      if (prev === `Info`) {
        return `TLDR`;
      }
      if (prev === `TLDR`) {
        return `Results`;
        // return 0;
      }
      if (prev === (briefData.info.template?.steps.length as number) - 1) {
        return `Results`;
      }
      return (prev as number) + 1;
    });
  };

  useEffect(() => {
    setBriefData(
      (prev) => ({
        ...initialBriefData,
        info: {
          ...initialBriefData.info,
          template: prev?.info.template
        }
      })
      // ({
      //   info: {
      //     template: prev?.info?.template
      //   }
      // } as IBrief)
    );
  }, [briefData?.info?.template?.title]);

  return (
    <SliceConfig>
      <div className={styles.container}>
        <h1 className="h1">Brand Briefer</h1>
        <div className={styles.form}>
          {getStepTitle() && (
            <h2 className={cn(`h2`, styles.title)}>{getStepTitle()}</h2>
          )}
          <div className={styles.formContents}>{renderStep()}</div>
        </div>

        <div className={styles.buttons}>
          <Button disabled={step === `Template`} onClick={handleBack}>
            Back
          </Button>
          {step !== `Results` && (
            <Button disabled={!canProceedToNextStep()} onClick={handleNext}>
              Next
            </Button>
          )}

          {step === `Results` && <PdfDownloadButton briefData={briefData} />}
        </div>
      </div>
    </SliceConfig>
  );
};

export default BrandBriefer;

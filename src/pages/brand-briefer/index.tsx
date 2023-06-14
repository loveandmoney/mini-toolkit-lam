import React from "react";
import type { ITemplate } from "src/components/LabTools/BrandBriefer/types";
import { BrandBriefer } from "~components";

interface IProps {}

const mockData: ITemplate[] = [
  {
    title: `Task Brief`,
    steps: [
      {
        title: `TLDR`,
        id: `a`,
        inputs: [
          {
            title: `Field 1`,
            type: `text`,
            placeholder: `Enter TLDR`,
            id: `a`
          },
          {
            title: `field 2`,
            type: `string`,
            placeholder: `Enter TLDR`,
            id: `b`
          }
        ]
      },
      {
        title: `Task Brief`,
        id: `b`,
        inputs: [
          {
            title: `Task brief`,
            type: `string`,
            label: `This is the Task Brief`,
            placeholder: `Enter task brief...`,
            id: `c`
          }
        ]
      }
    ]
  },
  {
    title: `Content Brief`,
    steps: [
      { title: `TLDR`, id: `c`, inputs: [{ title: ``, type: `text`, id: `d` }] }
    ]
  }
];

const BrandBrieferPage = (props: IProps) => {
  return <BrandBriefer templates={mockData} />;
};

export default BrandBrieferPage;

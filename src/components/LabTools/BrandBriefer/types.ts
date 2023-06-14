export interface ISteps {
  TLDR?: string;
  "Task Brief"?: string;
}

export interface ICustomField {
  title: string;
  value: string;
}

export interface ITemplate {
  steps: ISteps[];
  title: string;
}

export interface IBriefInfo {
  title: string;
  author: string;
  date: string;
  template: ITemplate;
}

export interface IBrief {
  info: IBriefInfo;
  steps: ISteps;
  customFields: ICustomField[];
}

export interface IFormValuesState {
  formValues: IBrief;
  setFormValues: React.Dispatch<React.SetStateAction<IBrief>>;
}

type TGlobalStep = number | `Template` | `Info` | `Results`;

type TCommonStep = keyof ISteps;

export type TStep = TCommonStep | TGlobalStep;

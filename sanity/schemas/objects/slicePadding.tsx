type IPaddingOption = `regular` | `small` | `none`;

export interface ISlicePadding {
  paddingTop?: IPaddingOption;
  paddingBottom?: IPaddingOption;
  paddingX?: IPaddingOption;
}

export default {
  name: `slicePadding`,
  title: `Slice Padding`,
  type: `object`,
  fields: [
    {
      title: `Padding Top`,
      name: `paddingTop`,
      type: `string`,
      options: {
        list: [`regular`, `small`, `none`],
        layout: `radio`
      }
    },
    {
      title: `Padding Bottom`,
      name: `paddingBottom`,
      type: `string`,
      options: {
        list: [`regular`, `small`, `none`],
        layout: `radio`
      }
    },
    {
      title: `Padding Left + Right`,
      name: `paddingX`,
      type: `string`,
      options: {
        list: [`regular`, `small`, `none`],
        layout: `radio`
      }
    }
  ],
  initialValue: {
    paddingTop: `regular`,
    paddingBottom: `regular`,
    paddingX: `regular`
  }
};

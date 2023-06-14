import { IColor } from "../documents/color";

export interface IDesignPrincipleBlock {
  title: string;
  principles: string[];
  backgroundColor: IColor;
}

export default {
  name: `designPrincipleBlock`,
  title: `Design Principle Block`,
  icon: () => `🧑‍🎨`,
  type: `object`,
  fields: [
    {
      title: `Title`,
      name: `title`,
      type: `string`
    },
    {
      title: `Principles`,
      name: `principles`,
      type: `array`,
      of: [{ type: `string` }],
      validation: (Rule: any) => Rule.min(1).max(3)
    },
    {
      title: `Background Color`,
      name: `backgroundColor`,
      type: `reference`,
      to: [{ type: `color` }]
    }
  ],
  preview: {
    select: {
      title: `title`
    },
    prepare({ title }: any) {
      return {
        title
      };
    }
  }
};

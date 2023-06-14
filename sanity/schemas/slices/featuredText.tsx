export default {
  name: `featuredText`,
  title: `Featured Text`,
  type: `object`,
  icon: () => `✏️`,
  fields: [
    {
      title: `Text`,
      name: `text`,
      type: `blockContent`
    },
    {
      title: `Links`,
      name: `links`,
      type: `array`,
      of: [{ type: `linkInternal` }, { type: `linkExternal` }]
    },
    {
      title: `Slice Config`,
      name: `sliceConfig`,
      type: `sliceConfig`,
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  preview: {
    select: {
      text: `text`
    },
    prepare({ text }: any) {
      const subtitleText = text?.[0]?.children?.[0]?.text || ``;

      return {
        title: `Featured Text`,
        subtitle: subtitleText
      };
    }
  }
};

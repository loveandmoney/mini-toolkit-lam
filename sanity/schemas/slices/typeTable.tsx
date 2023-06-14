export default {
  name: `typeTable`,
  title: `Type Table`,
  type: `object`,
  icon: () => `🔤`,
  fields: [
    {
      name: `subheadingStyle`,
      title: `Subheading Style`,
      type: `typeStyle`
    },
    {
      title: `Preview Text`,
      name: `previewText`,
      type: `array`,
      of: [{ type: `typographyPreviewText` }]
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
  initialValue: {
    subheadingStyle: {
      style: `b2`
    }
  },
  preview: {
    prepare() {
      return {
        title: `Type Table`
      };
    }
  }
};

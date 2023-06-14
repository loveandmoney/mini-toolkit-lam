export default {
  name: `imageGrid`,
  title: `Image Grid`,
  type: `object`,
  icon: () => `🖼`,
  fields: [
    {
      name: `images`,
      title: `Images`,
      type: `array`,
      of: [{ type: `altImage` }]
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
    prepare() {
      return {
        title: `Image Grid`
      };
    }
  }
};

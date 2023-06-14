export default {
  name: `simpleVideo`,
  title: `Simple Video`,
  type: `object`,
  icon: () => `📺`,
  fields: [
    {
      name: `videoURL`,
      title: `Video URL`,
      type: `url`
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
        title: `Simple Video`
      };
    }
  }
};

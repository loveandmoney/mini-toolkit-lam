export default {
  name: `menuList`,
  title: `Menu List`,
  type: `object`,
  icon: () => `🔎`,
  fields: [
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
        title: `Menu List`
      };
    }
  }
};

export default {
  name: `designPrincipleBlocks`,
  title: `Design Principle Blocks`,
  type: `object`,
  icon: () => `🧑‍🎨`,
  fields: [
    {
      title: `Blocks`,
      name: `blocks`,
      type: `array`,
      of: [{ type: `designPrincipleBlock` }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Design Principle Blocks`
      };
    }
  }
};

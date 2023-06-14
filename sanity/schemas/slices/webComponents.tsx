export default {
  name: `webComponents`,
  title: `Web Components`,
  type: `object`,
  icon: () => `🛠`,
  fields: [
    {
      title: `Field`,
      name: `field`,
      type: `string`,
      // Documents need at least one field, but we don't actually need any custom data
      hidden: true
    }
  ],
  initialValue: {
    field: `abcde`
  },
  preview: {
    prepare() {
      return {
        title: `Web Components`
      };
    }
  }
};

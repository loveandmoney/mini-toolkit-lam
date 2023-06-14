export default {
  name: `password`,
  title: `Password`,
  type: `object`,
  icon: () => `🔒`,
  fields: [
    {
      title: `Password`,
      name: `password`,
      type: `string`
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Password`
      };
    }
  }
};

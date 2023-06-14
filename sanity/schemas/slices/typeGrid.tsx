export default {
  name: `typeGrid`,
  title: `Type Grid`,
  type: `object`,
  icon: () => `🔠`,
  fields: [
    {
      name: `toggleButtonStyle`,
      title: `Toggle Button Style`,
      type: `typeStyle`
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
    toggleButtonStyle: {
      style: `b2`
    }
  },
  preview: {
    prepare() {
      return {
        title: `Type Grid`
      };
    }
  }
};

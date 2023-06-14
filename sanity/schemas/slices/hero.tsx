export default {
  name: `hero`,
  title: `Hero`,
  type: `object`,
  icon: () => `🦸`,
  fields: [
    {
      title: `Title`,
      name: `title`,
      type: `string`
    },
    // ... other fields
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
    sliceConfig: {
      textColor: {
        _ref: `cbed9907-022d-4787-a69a-d390a9f1e3d4` // white
      },
      backgroundColor: {
        _ref: `f5259c1f-1731-4e19-9bb8-37c0a01cf860` // black
      }
    }
  },
  preview: {
    select: {
      text: `title`
    },
    prepare({ text }: any) {
      return {
        title: `Hero`,
        subtitle: text
      };
    }
  }
};

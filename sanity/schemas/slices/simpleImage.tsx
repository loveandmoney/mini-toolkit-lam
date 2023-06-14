export default {
  name: `simpleImage`,
  title: `Simple Image`,
  type: `object`,
  icon: () => `⭐️`,
  fields: [
    {
      name: `image`,
      title: `Image`,
      type: `altImage`
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
      image: `image.asset.url`
    },
    prepare({ image }: any) {
      console.log(image);
      return {
        title: `Simple Image`,
        media: () => <img src={image} alt="" />
      };
    }
  }
};

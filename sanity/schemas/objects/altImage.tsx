export default {
  name: `altImage`,
  title: `Image`,
  type: `image`,
  validation: (Rule: any) =>
    Rule.custom((fields: any) => {
      if (!fields.asset) return `Image is required`;
      return true;
    }),
  fields: [
    {
      name: `altText`,
      title: `Alternative Text`,
      type: `string`
    }
  ],
  preview: {
    select: {
      imageUrl: `asset.url`,
      altText: `altText`
    },
    prepare({ imageUrl, altText }: any) {
      return {
        title: altText || `Image`,
        media: () => (
          <img src={imageUrl} style={{ objectFit: `cover` }} alt="" />
        )
      };
    }
  }
};

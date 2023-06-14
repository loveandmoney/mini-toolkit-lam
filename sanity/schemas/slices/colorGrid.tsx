export default {
  name: `colorGrid`,
  title: `Color Grid`,
  type: `object`,
  icon: () => `🎨`,
  fields: [
    {
      title: `Category`,
      name: `category`,
      type: `string`,
      options: {
        list: [
          { title: `Brand`, value: `brand` },
          { title: `Digital / UX`, value: `digital/ux` },
          { title: `Mono`, value: `mono` }
        ],
        layout: `radio`
      }
    },
    {
      title: `Slice Config`,
      name: `sliceConfig`,
      type: `sliceConfig`
    }
  ],
  initialValue: {
    category: `brand`
  },
  preview: {
    select: {
      category: `category`
    },
    prepare({ category }: any) {
      const capitalisedCategory =
        category.charAt(0).toUpperCase() + category.slice(1);
      return {
        title: `Color Grid`,
        subtitle: capitalisedCategory
      };
    }
  }
};

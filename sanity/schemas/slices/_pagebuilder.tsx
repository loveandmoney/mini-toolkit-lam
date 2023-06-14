export default {
  name: `pagebuilder`,
  title: `Pagebuilder`,
  type: `object`,
  fields: [
    {
      name: `slices`,
      title: `Slices`,
      type: `array`,
      of: [
        { type: `hero` },
        { type: `videoAtf` },
        { type: `featuredText` },
        { type: `textArticle` },
        { type: `simpleImage` },
        { type: `imageGrid` },
        { type: `webComponents` },
        { type: `simpleVideo` },
        { type: `colorGrid` },
        { type: `menuList` },
        { type: `typeTable` },
        { type: `typeGrid` },
        { type: `password` },
        { type: `designPrincipleBlocks` }
      ]
    }
  ]
};

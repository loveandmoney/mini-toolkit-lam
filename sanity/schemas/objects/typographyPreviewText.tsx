export default {
  name: `typographyPreviewText`,
  title: `Typography Preview Text`,
  type: `object`,
  fields: [
    {
      title: `Style ID`,
      name: `styleId`,
      description: `e.g. 'Heading', must match ID in typography.js`,
      type: `string`
    },
    {
      title: `Text`,
      name: `text`,
      type: `text`
    }
  ]
};

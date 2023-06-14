export default {
  name: `typeStyle`,
  title: `Type Style`,
  type: `object`,
  fields: [
    {
      name: `style`,
      title: `Style`,
      type: `string`,
      options: {
        list: [`d1`, `h1`, `h2`, `h3`, `b1`, `b2`, `button-text`, `caption`]
      },
      default: `b1`
    }
  ]
};

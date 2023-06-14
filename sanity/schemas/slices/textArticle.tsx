export default {
  name: `textArticle`,
  title: `Text Article`,
  icon: () => `📝`,
  type: `object`,
  fields: [
    {
      title: `Left Column`,
      name: `leftColumn`,
      description: `Usually a header or label`,
      type: `blockContent`
    },
    {
      title: `Tags`,
      name: `tags`,
      type: `array`,
      description: `Display under the left column content`,
      of: [{ type: `linkTag` }]
    },
    {
      title: `Right Column`,
      name: `rightColumn`,
      description: `Usually the main text content`,
      type: `blockContent`
    },
    {
      title: `Links`,
      name: `links`,
      type: `array`,
      description: `Will display as buttons below the right column content`,
      of: [{ type: `linkInternal` }, { type: `linkExternal` }]
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
      leftColumn: `leftColumn`,
      rightColumn: `rightColumn`
    },
    prepare({ leftColumn, rightColumn }: any) {
      const subtitleText =
        leftColumn?.[0]?.children?.[0]?.text ||
        rightColumn?.[0]?.children?.[0]?.text ||
        ``;

      return {
        title: `Text Article`,
        subtitle: subtitleText
      };
    }
  }
};

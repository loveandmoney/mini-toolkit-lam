export default {
  name: `footer`,
  title: `Footer`,
  type: `object`,
  fields: [
    {
      title: `Show footer`,
      name: `showFooter`,
      type: `boolean`
    },
    {
      title: `Client name`,
      name: `clientName`,
      description: `Will show '© <Client Name> <Current Year>'`,
      type: `string`,
      hidden: ({ parent }) => !parent?.showFooter
    },
    {
      title: `Footer Text`,
      name: `footerText`,
      type: `blockContent`,
      hidden: ({ parent }) => !parent?.showFooter
    }
  ]
};

import React from "react";

export default {
  name: `page`,
  title: `Page`,
  type: `document`,
  icon: () => <span style={{ fontSize: 30 }}>📄</span>,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: `slug`,
      title: `URL`,
      type: `slug`,
      description: `IMPORTANT: For Home page, slug must be '/'`,
      options: {
        source: `title`
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: `pagebuilder`,
      title: `Pagebuilder`,
      type: `pagebuilder`
    },
    {
      title: `Disabled`,
      name: `disabled`,
      type: `boolean`
    }
  ],
  initialValue: {
    disabled: false
  }
};

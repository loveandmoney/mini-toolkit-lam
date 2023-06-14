import React from "react";
import {
  orderRankField,
  orderRankOrdering
} from "@sanity/orderable-document-list";

export default {
  name: `category`,
  title: `Category`,
  type: `document`,
  icon: () => <span style={{ fontSize: 30 }}>🗂</span>,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: `category` }),
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      validation: (Rule) => Rule.required()
    },
    {
      name: `slug`,
      title: `Slug`,
      type: `slug`,
      options: {
        source: `title`
      },
      validation: (Rule) => Rule.required()
    },
    {
      title: `Pages`,
      name: `pages`,
      type: `array`,
      of: [{ type: `reference`, to: [{ type: `page` }] }]
    }
  ]
};

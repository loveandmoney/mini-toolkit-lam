import React from "react";

export default {
  name: `settings`,
  title: `Settings`,
  type: `document`,
  icon: () => <span style={{ fontSize: 30 }}>⚙️</span>,
  fields: [
    {
      title: `Footer`,
      name: `footer`,
      type: `footer`
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Settings`
      };
    }
  }
};

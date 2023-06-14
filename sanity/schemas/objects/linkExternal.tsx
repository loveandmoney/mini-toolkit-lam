import { EarthGlobeIcon } from "@sanity/icons";

export interface ILinkExternal {
  title: string;
  url: string;
  newWindow: boolean;
  _type: `linkExternal`;
}

export default {
  title: "External Link",
  name: "linkExternal",
  type: "object",
  icon: EarthGlobeIcon,
  initialValue: {
    newWindow: true
  },
  fields: [
    // Title
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    // URL
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    // Open in a new window
    {
      title: "Open in a new window?",
      name: "newWindow",
      type: "boolean"
    }
  ],
  preview: {
    select: {
      title: "title",
      url: "url"
    },
    prepare(selection: any) {
      const { title, url } = selection;

      const subtitle = [];
      if (url) {
        subtitle.push(`→ ${url}`);
      }

      return {
        // media: image,
        subtitle: subtitle.join(" "),
        title
      };
    }
  }
};

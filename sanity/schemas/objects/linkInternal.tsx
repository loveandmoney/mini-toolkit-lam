import { LinkIcon } from "@sanity/icons";
import { PAGE_REFERENCES } from "../../constants";

export interface ILinkInternal {
  title: string;
  reference: {
    slug: {
      current: string;
    };
  };
  _type: `linkInternal`;
}

export default {
  title: "Internal Link",
  name: "linkInternal",
  type: "object",
  icon: LinkIcon,
  fields: [
    // Title
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule: any) => Rule.required()
    },
    // Reference
    {
      name: "reference",
      type: "reference",
      weak: true,
      validation: (Rule: any) => Rule.required(),
      to: PAGE_REFERENCES
    }
  ],
  preview: {
    select: {
      reference: "reference",
      referenceProductTitle: "reference.store.title",
      referenceProductPriceRange: "reference.store.priceRange",
      referenceTitle: "reference.title",
      referenceType: "reference._type",
      title: "title"
    },
    prepare(selection: any) {
      const {
        reference,
        referenceProductPriceRange,
        referenceProductTitle,
        referenceTitle,
        referenceType,
        title
      } = selection;

      const subtitle = [];
      if (reference) {
        subtitle.push([`→ ${referenceTitle || referenceProductTitle}`]);
      } else {
        subtitle.push("(Nonexistent document reference)");
      }

      return {
        // media: image,
        subtitle: subtitle.join(" "),
        title
      };
    }
  }
};

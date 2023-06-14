import { LinkIcon } from "@sanity/icons";
import { ILinkInternal } from "./linkInternal";
import { ILinkExternal } from "./linkExternal";
import { IColor } from "../documents/color";

export interface ILinkTag {
  linkType: `internal` | `external`;
  linkInternal: ILinkInternal;
  linkExternal: ILinkExternal;
  hoverColor: IColor;
}

export default {
  title: `Link Tag`,
  name: `linkTag`,
  icon: LinkIcon,
  type: `object`,
  fields: [
    {
      title: `Link Type`,
      name: `linkType`,
      type: `string`,
      options: {
        list: [`internal`, `external`],
        layout: `radio`
      }
    },
    {
      title: `Internal Link`,
      name: `linkInternal`,
      type: `linkInternal`,
      hidden: ({ parent }: any) => parent.linkType !== `internal`
    },
    {
      title: `External Link`,
      name: `linkExternal`,
      type: `linkExternal`,
      hidden: ({ parent }: any) => parent.linkType !== `external`
    },
    {
      title: `Hover Color`,
      name: `hoverColor`,
      type: `reference`,
      to: [{ type: `color` }]
    }
  ],
  initialValue: {
    linkType: `internal`
  },
  preview: {
    select: {
      linkType: `linkType`,
      internalTitle: `linkInternal.title`,
      externalTitle: `linkExternal.title`
    },
    prepare({ linkType, internalTitle, externalTitle }: any) {
      const linkTitle = linkType === `internal` ? internalTitle : externalTitle;

      return {
        title: `${linkTitle} (${linkType})`
      };
    }
  }
};

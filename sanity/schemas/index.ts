import type { ILinkInternal } from "./objects/linkInternal";
import type { ILinkExternal } from "./objects/linkExternal";
import type { ISliceConfig } from "./objects/sliceConfig";
import type { IColor } from "./documents/color";
import type { IDesignPrincipleBlock } from "./objects/designPrincipleBlock";
import type { ILinkTag } from "./objects/linkTag";
import type { IVideoAtf } from "./slices/videoAtf";

type TLinkInternalOrExternal = ILinkInternal | ILinkExternal;

export type {
  ISliceConfig,
  ILinkInternal,
  ILinkExternal,
  TLinkInternalOrExternal,
  IColor,
  IDesignPrincipleBlock,
  ILinkTag,
  IVideoAtf
};

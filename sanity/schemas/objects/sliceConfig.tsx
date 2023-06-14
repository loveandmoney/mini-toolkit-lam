import { IColor } from "../documents/color";
import { ISlicePadding } from "./slicePadding";

export interface ISliceConfig {
  backgroundColor?: IColor;
  textColor?: IColor;
  slicePadding?: ISlicePadding;
}

export default {
  name: `sliceConfig`,
  title: `Slice Config`,
  type: `object`,
  fields: [
    {
      name: `backgroundColor`,
      title: `Background Colour`,
      type: `reference`,
      to: [{ type: `color` }]
    },
    {
      name: `textColor`,
      title: `Text Colour`,
      type: `reference`,
      to: [{ type: `color` }]
    },
    {
      title: `Slice Padding`,
      name: `slicePadding`,
      type: `slicePadding`,
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  initialValue: {
    backgroundColor: {
      _ref: `cbed9907-022d-4787-a69a-d390a9f1e3d4` // white
    },
    textColor: {
      _ref: `f5259c1f-1731-4e19-9bb8-37c0a01cf860` // black
    }
  }
};

/* eslint-disable */

import { graphql } from "gatsby";

export const query = graphql`
  fragment SliceConfigFragment on SanitySliceConfig {
    backgroundColor {
      hex
    }
    textColor {
      hex
    }
    slicePadding {
      paddingTop
      paddingBottom
      paddingX
    }
  }
`;

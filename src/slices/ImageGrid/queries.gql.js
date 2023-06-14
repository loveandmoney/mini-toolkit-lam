/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ImageGridFragment on SanityImageGrid {
    _key
    _type

    images {
      _key
      altText
      asset {
        gatsbyImageData
      }
    }

    sliceConfig {
      ...SliceConfigFragment
    }
  }
`;

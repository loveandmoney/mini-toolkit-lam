/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment SimpleImageFragment on SanitySimpleImage {
    _key
    _type

    image {
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

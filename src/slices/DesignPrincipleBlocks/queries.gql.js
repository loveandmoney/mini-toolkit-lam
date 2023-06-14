/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment DesignPrincipleBlocksFragment on SanityDesignPrincipleBlocks {
    _key
    _type

    blocks {
      title
      principles
      backgroundColor {
        hex
      }
    }
  }
`;

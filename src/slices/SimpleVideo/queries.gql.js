/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment SimpleVideoFragment on SanitySimpleVideo {
    _key
    _type

    videoURL

    sliceConfig {
      ...SliceConfigFragment
    }
  }
`;

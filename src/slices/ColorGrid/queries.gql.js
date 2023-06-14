/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ColorGridFragment on SanityColorGrid {
    _key
    _type

    category

    sliceConfig {
      ...SliceConfigFragment
    }
  }
`;

/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment MenuListFragment on SanityMenuList {
    _key
    _type

    sliceConfig {
      ...SliceConfigFragment
    }
  }
`;

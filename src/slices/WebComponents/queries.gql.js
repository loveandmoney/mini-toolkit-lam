/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment WebComponentsFragment on SanityWebComponents {
    _key
    _type
  }
`;

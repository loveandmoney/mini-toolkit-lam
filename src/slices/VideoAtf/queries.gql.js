/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment VideoAtfFragment on SanityVideoAtf {
    _key
    _type

    url
  }
`;

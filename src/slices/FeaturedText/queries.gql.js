/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment FeaturedTextFragment on SanityFeaturedText {
    _key
    _type

    _rawText

    links {
      ... on SanityLinkInternal {
        _key
        _type
        title
        reference {
          title
          slug {
            current
          }
        }
      }
      ... on SanityLinkExternal {
        _key
        _type
        url
        title
        newWindow
      }
    }

    sliceConfig {
      ...SliceConfigFragment
    }
  }
`;

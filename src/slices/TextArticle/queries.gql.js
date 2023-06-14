import { graphql } from "gatsby";

export const Queries = graphql`
  fragment TextArticleFragment on SanityTextArticle {
    _key
    _type

    _rawLeftColumn
    _rawRightColumn

    tags {
      linkType
      hoverColor {
        hex
      }
      linkInternal {
        title
        reference {
          slug {
            current
          }
        }
      }
      linkExternal {
        url
        title
        newWindow
      }
    }

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

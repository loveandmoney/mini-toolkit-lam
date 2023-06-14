import { graphql } from "gatsby";

export const Queries = graphql`
  fragment TypeTableFragment on SanityTypeTable {
    _key
    _type

    subheadingStyle {
      style
    }
    previewText {
      text
      styleId
    }

    sliceConfig {
      ...SliceConfigFragment
    }
  }
`;

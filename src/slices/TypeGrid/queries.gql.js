import { graphql } from "gatsby";

export const Queries = graphql`
  fragment TypeGridFragment on SanityTypeGrid {
    _key
    _type

    toggleButtonStyle {
      style
    }

    sliceConfig {
      ...SliceConfigFragment
    }
  }
`;

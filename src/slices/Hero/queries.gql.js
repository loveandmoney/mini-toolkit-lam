import { graphql } from "gatsby";

export const Queries = graphql`
  fragment HeroFragment on SanityHero {
    _key
    _type

    title

    sliceConfig {
      ...SliceConfigFragment
    }
  }
`;

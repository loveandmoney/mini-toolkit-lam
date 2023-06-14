import { graphql } from "gatsby";

export const query = graphql`
  fragment PagebuilderFragment on SanityPagebuilder {
    slices {
      ...HeroFragment
      ...FeaturedTextFragment
      ...TextArticleFragment
      ...SimpleImageFragment
      ...ImageGridFragment
      ...SimpleVideoFragment
      ...ColorGridFragment
      ...MenuListFragment
      ...TypeTableFragment
      ...TypeGridFragment
      ...PasswordFragment
      ...DesignPrincipleBlocksFragment
      ...VideoAtfFragment
      ...WebComponentsFragment
    }
  }
`;

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment PasswordFragment on SanityPassword {
    _key
    _type

    password
  }
`;

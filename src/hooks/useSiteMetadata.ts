import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;

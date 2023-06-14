import React from "react";
import { Helmet } from "react-helmet";
import {
  useSiteMetadata
  // useDarkMode
} from "~hooks";

interface IProps {
  pageTitle: string;
}

const SEO = ({ pageTitle }: IProps) => {
  const meta = useSiteMetadata();
  const siteTitle = meta.title;
  const titleText =
    pageTitle === `Home` ? siteTitle : `${pageTitle} | ${siteTitle}`;

  // const isDarkMode = useDarkMode();
  // const favicon = isDarkMode
  //   ? `/images/favicon-darkmode.png`
  //   : `/images/favicon-default.png`;

  return (
    <>
      <Helmet>
        <title>{titleText}</title>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Helmet>
    </>
  );
};

export default SEO;

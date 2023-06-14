import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { TextArticle } from "~slices";

const query = graphql`
  query FooterQuery {
    sanitySettings {
      footer {
        showFooter
        _rawFooterText
        clientName
      }
    }
  }
`;

const Footer = () => {
  const {
    sanitySettings: { footer }
  } = useStaticQuery(query);

  const { showFooter, clientName, _rawFooterText } = footer;

  if (!showFooter) return null;

  return (
    <TextArticle
      removeTopBorder
      noAnimation
      data={{
        _rawLeftColumn: [
          {
            _key: "1",
            _type: "block",
            children: [
              {
                _key: "2",
                _type: "span",
                marks: [],
                text: `© ${clientName} ${new Date().getFullYear()}`
              }
            ],
            markDefs: [],
            style: "b2"
          }
        ],
        _rawRightColumn: _rawFooterText,
        sliceConfig: {
          slicePadding: {
            paddingTop: "none"
          }
        }
      }}
    />
  );
};

export default Footer;

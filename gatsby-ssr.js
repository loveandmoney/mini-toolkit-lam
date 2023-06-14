import * as React from "react";
import AppProvider from "./src/context/AppContext";
import website from "./config/website";

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: website?.siteLanguage || `en` });
};

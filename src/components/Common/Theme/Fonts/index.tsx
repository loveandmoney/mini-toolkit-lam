import React from "react";
import { Helmet } from "react-helmet";
import { FONT_CLASSES, FONT_FAMILY_CSS } from "./fontCSS";

/** ============================================================================
 * @component
 * Inject the formatted CSS into the document head
 */
const Fonts = () => (
  <Helmet>
    <style>{FONT_FAMILY_CSS}</style>
    <style>{FONT_CLASSES}</style>
  </Helmet>
);

export default Fonts;

import React from "react";
import { colors } from "~data";
import { Helmet } from "react-helmet";

const Colors = () => {
  let colorsCss = `:root{`;

  colors.forEach((color) => {
    colorsCss += `--color-${color.id}: ${color.hex};`;
  });

  colorsCss += `--cubic-easing: cubic-bezier(0.215, 0.61, 0.355, 1);`;
  colorsCss += `}`;

  return (
    <Helmet>
      <style>{colorsCss}</style>
    </Helmet>
  );
};

export default Colors;

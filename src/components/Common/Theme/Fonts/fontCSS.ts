import { rotisserieCamel } from "~utils";
import fonts from "~data/fonts.json";
import typography from "~data/typography.json";

interface IFontConfig {
  fontDisplay: string;
  fontStyle: string;
  fontWeight: string;
  files: {
    [key: string]: string;
  };
  src?: string;
}

interface ITypographyStyleConfig {
  id: string;
  className: string;
  attributes: {
    [key: string]: string;
  };
}

export const FONT_FAMILY_CSS = Object.keys(fonts)
  .map((family) =>
    fonts[family]
      .map((font: IFontConfig) => {
        const src = Object.keys(font.files)
          .map(
            (format) =>
              `url("/fonts/${font.files[format]}") format("${format}")`
          )
          .join(`,`);

        font.src = src;

        return `@font-face {font-family: "${family}";${Object.keys(font)
          .map(
            (styleKey: any) =>
              `${rotisserieCamel(styleKey)}: ${
                font[styleKey as keyof IFontConfig]
              }`
          )
          .join(`;\n`)};}`;
      })
      .join(`\n`)
  )
  .join(`\n`);

export const FONT_CLASSES = `${[...typography]
  .reverse()
  .map(
    (breakpoint) =>
      `@media only screen and (min-width: ${
        breakpoint.min
      }px) {${breakpoint.styles
        .map(
          (style: ITypographyStyleConfig) =>
            `.${style.className} {${Object.keys(style.attributes)
              .map(
                (styleKey) =>
                  `${rotisserieCamel(styleKey)}: ${style.attributes[styleKey]}`
              )
              .join(`;`)};}`
        )
        .join(`\n`)}`
  )
  .join(`\n}\n`)}}`;

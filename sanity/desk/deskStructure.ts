import categories from "./categories";
import preview from "./preview";

export const structure = (S: any, context: any) => {
  return S.list()
    .title(`Content`)
    .items([
      S.documentTypeListItem(`page`).title(`Pages`),
      categories(S, context),
      S.documentTypeListItem(`color`).title(`Colours`),
      S.documentListItem()
        .title(`Settings`)
        .schemaType(`settings`)
        .child(
          S.editor()
            .title(`Settings`)
            .schemaType(`settings`)
            .documentId(`settings`)
        )
    ]);
};

export const defaultDocumentNode = (S: any, { schemaType }: any) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === `page`) {
    return S.document().views([
      S.view.form(),
      S.view.component(preview).title(`Preview`)
    ]);
  }

  return S.document().views([S.view.form()]);
};

import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "~components";
import PdfDocument, { type IProps as IPdfDocumentProps } from "../PdfDocument";

const PdfDownloadButton = (props: IPdfDocumentProps) => (
  <PDFDownloadLink
    document={<PdfDocument {...props} />}
    fileName="Amazing Brief"
  >
    {({ loading }) =>
      loading ? (
        <Button display>Loading document...</Button>
      ) : (
        <Button display>Download</Button>
      )
    }
  </PDFDownloadLink>
);

export default PdfDownloadButton;

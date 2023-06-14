import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font
} from "@react-pdf/renderer";
import NeueMontrealBook from "./fonts/PPNeueMontreal-Book.ttf";
import type { IBrief } from "../../types";

Font.register({
  family: "Neue Montreal Book",
  src: NeueMontrealBook
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    fontFamily: "Neue Montreal Book",
    padding: 16
  },
  wordmark: {
    marginBottom: 16,
    fontSize: 12
  },
  title: {
    fontSize: 24,
    marginBottom: 4
  },
  info: {
    fontSize: 18,
    marginBottom: 32
  },
  field: {
    marginBottom: 16,
    borderTop: `1px solid black`,
    paddingTop: 16
  },
  fieldTitle: {
    fontSize: 16,
    marginBottom: 8
  },
  fieldContent: {
    fontSize: 14,
    lineHeight: 1.5
  }
});

export interface IProps {
  briefData: IBrief;
}

const PdfDocument = ({ briefData }: IProps) => {
  const {
    info: { author, date, template, title }
  } = briefData;

  const { title: briefType } = template;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.wordmark}>
          <Text>Love + Money</Text>
        </View>
        <View style={styles.title}>
          <Text>
            {briefType} - {title}
          </Text>
        </View>
        <View style={styles.info}>
          <Text>
            {author} - {date}
          </Text>
        </View>

        {briefData.customFields?.map((field, i) => (
          <View style={styles.field} key={i}>
            <Text style={styles.fieldTitle}>{field.title}</Text>
            <Text style={styles.fieldContent}>{field.value}</Text>
          </View>
        ))}

        {briefData.steps.TLDR && (
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>TL;DR</Text>
            <Text style={styles.fieldContent}>{briefData.steps.TLDR}</Text>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default PdfDocument;

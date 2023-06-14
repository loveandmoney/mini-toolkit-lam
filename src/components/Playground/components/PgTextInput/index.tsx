import React from "react";
import { TComponentSchemaField } from "src/hooks/usePlayground";
import { TextInput } from "~components";
import { usePlayground } from "~hooks";

const PgTextInput = () => {
  const schemaFields: TComponentSchemaField[] = [
    {
      title: `placeholder`,
      type: `textInput`
    },
    {
      title: `value`,
      type: `textInput`
    },
    {
      title: `label`,
      type: `textInput`
    },
    {
      title: `hint`,
      type: `textInput`
    },
    {
      title: `warningMessage`,
      type: `textInput`
    },
    {
      title: `hasSearchIcon`,
      type: `toggle`
    },
    {
      title: `hasError`,
      type: `toggle`
    },
    {
      title: `required`,
      type: `toggle`
    },
    {
      title: `disabled`,
      type: `toggle`
    },
    {
      title: `textarea`,
      type: `toggle`
    }
  ];

  const { config, renderPlayground } = usePlayground(schemaFields);

  return <>{renderPlayground(<TextInput {...config} />)}</>;
};

export default PgTextInput;

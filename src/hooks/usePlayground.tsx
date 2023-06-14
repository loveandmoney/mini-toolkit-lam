import React, { useState } from "react";
import { SchemaTextInput, SchemaToggle, SchemaOptions } from "~components";
import { camelCaseToTitleCase } from "~utils";

export type TComponentSchemaField = {
  title: string;
  type: "textInput" | "toggle" | "options";
  options?: string[];
};

interface IConfig {
  [key: string]: any;
}

const usePlayground = (componentSchema?: TComponentSchemaField[]) => {
  const initialConfig: IConfig = {};

  componentSchema?.forEach((field) => {
    switch (field.type) {
      case `toggle`:
        initialConfig[field.title] = false;
        break;
      case `textInput`:
        initialConfig[field.title] = camelCaseToTitleCase(field.title);
        break;
      case `options`:
        initialConfig[field.title] = field.options?.[0];
        break;
      default:
        throw new Error(
          `Error in usePlayground: field type not recognised while building initial config.`
        );
    }
  });

  const [config, setConfig] = useState(initialConfig);

  const updateConfig = (field: string, value: any) => {
    setConfig((prev: any) => ({
      ...prev,
      [field]: value
    }));
  };

  const renderPlayground = (previewComponent: JSX.Element) => (
    <>
      <div>
        <h2 className="h3" style={{ marginBottom: `1rem` }}>
          Preview
        </h2>
        <div style={{ marginBottom: `4rem` }}>{previewComponent}</div>
      </div>

      <div>
        {componentSchema && (
          <h2 className="h3" style={{ marginBottom: `1rem` }}>
            Config
          </h2>
        )}
        {componentSchema?.map((field) => {
          switch (field.type) {
            case `textInput`:
              return (
                <SchemaTextInput
                  key={field.title}
                  config={config}
                  updateConfig={updateConfig}
                  field={field.title}
                />
              );
            case `toggle`:
              return (
                <SchemaToggle
                  key={field.title}
                  config={config}
                  updateConfig={updateConfig}
                  field={field.title}
                />
              );
            case `options`:
              return (
                <SchemaOptions
                  key={field.title}
                  config={config}
                  updateConfig={updateConfig}
                  field={field.title}
                  options={field.options as string[]}
                />
              );
            default:
              return <p>Invalid field type</p>;
          }
        })}
      </div>
    </>
  );

  return { config, renderPlayground };
};

export default usePlayground;

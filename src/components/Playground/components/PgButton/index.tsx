import React from "react";
import { Button } from "~components";
import { usePlayground } from "~hooks";
import { TComponentSchemaField } from "src/hooks/usePlayground";

const PgButton = () => {
  const schemaFields: TComponentSchemaField[] = [
    {
      title: `buttonText`,
      type: `textInput`
    },
    {
      title: `lightTheme`,
      type: `toggle`
    },
    {
      title: `fluid`,
      type: `toggle`
    },
    {
      title: `disabled`,
      type: `toggle`
    },
    {
      title: `loading`,
      type: `toggle`
    },
    {
      title: `iconLeft`,
      type: `toggle`
    },
    {
      title: `iconRight`,
      type: `toggle`
    },
    {
      title: `variant`,
      type: `options`,
      options: [`primary`, `secondary`, `text`]
    }
  ];

  const { config, renderPlayground } = usePlayground(schemaFields);

  return (
    <>
      {renderPlayground(
        <Button
          {...config}
          iconLeft={config.iconLeft ? `arrowLeft` : undefined}
          iconRight={config.iconRight ? `arrowRight` : undefined}
        >
          {config.buttonText}
        </Button>
      )}
    </>
  );
};

export default PgButton;

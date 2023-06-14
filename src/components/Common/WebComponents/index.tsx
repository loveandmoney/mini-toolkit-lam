import React, { useState } from "react";
import cn from "classnames";
import { PgButton, PgTextInput } from "~components";
import { camelCaseToTitleCase } from "~utils";
import * as styles from "./styles.module.scss";

type TComponent = "button" | "textInput";
const components: TComponent[] = ["button", "textInput"];

const WebComponents = () => {
  const [activeComponent, setActiveComponent] = useState<TComponent>(
    components[0]
  );

  const selectComponent = (component: TComponent) => {
    setActiveComponent(component);
  };

  const componentToRender = () => {
    switch (activeComponent) {
      case `button`:
        return <PgButton />;
      case `textInput`:
        return <PgTextInput />;

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {components.map((component) => (
          <button
            type="button"
            className={cn(styles.button, {
              [styles.selected]: activeComponent === component
            })}
            onClick={() => selectComponent(component)}
            key={component}
          >
            {camelCaseToTitleCase(component)}
          </button>
        ))}
      </div>
      <div className={styles.partition} />

      <div className={styles.componentContainer}>{componentToRender()}</div>
    </div>
  );
};

export default WebComponents;

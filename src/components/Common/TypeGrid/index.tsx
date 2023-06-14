import React, { useState } from "react";
import cn from "classnames";
import * as styles from "./styles.module.scss";

interface IProps {
  toggleButtonStyle?: {
    style: string;
  };
  backgroundColor?: string;
}

const TypeGrid = ({ toggleButtonStyle, backgroundColor }: IProps) => {
  const [letterCase, setLetterCase] = useState(`uppercase`);

  const characters = `abcdefghijklmnopqrstuvwxyz0123456789`.split(``);

  return (
    <div>
      <div
        className={cn(
          styles.toggleButtons,
          toggleButtonStyle?.style || `caption`
        )}
      >
        <button
          className={cn({ [styles.activeOption]: letterCase === `uppercase` })}
          type="button"
          onClick={() => setLetterCase(`uppercase`)}
        >
          Uppercase
        </button>
        <button
          className={cn({ [styles.activeOption]: letterCase === `lowercase` })}
          type="button"
          onClick={() => setLetterCase(`lowercase`)}
        >
          Lowercase
        </button>
      </div>

      <div
        className={cn(styles.grid, {
          [styles.uppercase]: letterCase === `uppercase`
        })}
      >
        {characters.map((character, i) => (
          <button
            type="button"
            style={{ background: backgroundColor }}
            onClick={() =>
              setLetterCase((prev) =>
                prev === `uppercase` ? `lowercase` : `uppercase`
              )
            }
            key={i}
            className={styles.gridItem}
          >
            <div className={cn(`h1`, styles.gridItemContent)}>{character}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeGrid;

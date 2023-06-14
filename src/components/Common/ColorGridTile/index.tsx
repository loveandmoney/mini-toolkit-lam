import React from "react";
import { IntersectionAnimation } from "~components";
import { hexToRGB } from "~utils";
import { useApp } from "~hooks";
import { type IColorData } from "~data";
import * as styles from "./styles.module.scss";

interface IProps {
  index: number;
  color: IColorData;
  inView: boolean;
  category: string;
}

const ColorGridTile = ({ index, color, inView, category }: IProps) => {
  const { title, category: colorCategory, hex, display } = color;

  if (colorCategory !== category) return null;

  const rgb = hexToRGB(hex);

  const fontColor = display === `dark` ? `white` : `black`;

  const { updateNotification } = useApp();

  const copyHexToClipboard = () => {
    navigator.clipboard.writeText(hex);
    updateNotification(`Hex code copied!`);
  };

  return (
    <IntersectionAnimation
      trigger={inView}
      animation="fadeGrow"
      delay={index * 50}
    >
      <li
        className={styles.gridItem}
        style={{ background: hex, color: fontColor }}
      >
        <button type="button" onClick={copyHexToClipboard}>
          <div className={styles.gridItemContent}>
            <p className="b2">{title}</p>

            <div>
              <p className="b2">{hex}</p>
              <p className="b2">{`R ${rgb?.r || `0`}  G ${rgb?.g || `0`}  B ${
                rgb?.g || `0`
              }`}</p>
            </div>
          </div>
        </button>
      </li>
    </IntersectionAnimation>
  );
};

export default ColorGridTile;

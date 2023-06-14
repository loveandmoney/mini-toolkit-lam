import React from "react";
import cn from "classnames";
import * as styles from "./styles.module.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Grid = ({ children, className }: IProps) => (
  <div className={cn(styles.grid, className)}>{children}</div>
);
export default Grid;

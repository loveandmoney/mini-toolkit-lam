import React from "react";
import { SVG, TSvg } from "~components";
import cn from "classnames";
import { Link } from "gatsby";
import * as styles from "./styles.module.scss";

interface IButton {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text" | "caption";
  buttonType?: "button" | "reset" | "submit";
  to?: string;
  href?: string;
  iconLeft?: TSvg;
  iconRight?: TSvg;
  color?: string;
  lightTheme?: boolean;
  disabled?: boolean;
  fluid?: boolean;
  loading?: boolean;
  display?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  variant = `primary`,
  buttonType = `button`,
  to,
  href,
  iconLeft,
  iconRight,
  color,
  lightTheme,
  disabled,
  fluid,
  loading,
  display,
  onClick,
  className
}: IButton) => {
  let BtnElement: any;
  if (display) BtnElement = `div`;
  if (to) BtnElement = Link;
  else if (href) BtnElement = `a`;
  else BtnElement = `button`;

  return (
    <BtnElement
      type={to || href ? `` : buttonType}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      disabled={disabled}
      onClick={() => onClick && onClick()}
      tabIndex={disabled ? `-1` : 0}
      to={to}
      style={{ backgroundColor: color }}
      className={cn(styles.button, className, styles[variant], {
        [styles.light]: lightTheme,
        [styles.fluid]: fluid,
        [styles.loading]: loading,
        [styles.disabled]: disabled
      })}
    >
      <div className={styles.content}>
        {iconLeft && (
          <SVG svg={iconLeft} className={cn(styles.icon, styles.left)} />
        )}
        <span className={variant === `caption` ? `caption` : `button-text`}>
          {children}
        </span>
        {iconRight && (
          <SVG svg={iconRight} className={cn(styles.icon, styles.right)} />
        )}
      </div>
      {!display && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader} />
        </div>
      )}
    </BtnElement>
  );
};

export default Button;

import React, { useEffect, useRef } from "react";
import cn from "classnames";
import { SVG } from "~components";
import { Link } from "gatsby";
import * as styles from "./styles.module.scss";

interface IProps {
  className?: string;
  to: string;
  text: string;
  direction: "prev" | "next";
}

const PageNavButton = ({ className, to, text, direction }: IProps) => {
  const buttonRef = useRef(
    null
  ) as React.MutableRefObject<HTMLAnchorElement | null>;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === `ArrowLeft` && direction === `prev`) {
      buttonRef.current?.click();
    } else if (e.key === `ArrowRight` && direction === `next`) {
      buttonRef.current?.click();
    }
  };

  useEffect(() => {
    window.addEventListener(`keydown`, handleKeyDown);

    return () => {
      window.removeEventListener(`keydown`, handleKeyDown);
    };
  }, []);

  return (
    // Don't know how to resolve ref type mismatch
    // https://github.com/gatsbyjs/gatsby/issues/34325
    // @ts-ignore-next-line
    <Link ref={buttonRef} className={cn(className, styles.button)} to={to}>
      <div className={styles.content}>
        {direction === `prev` && (
          <SVG svg="arrowLeft" className={styles.icon} />
        )}
        <span className={cn(`b2`, styles.text)}>{text}</span>
        {direction === `next` && (
          <SVG svg="arrowRight" className={styles.icon} />
        )}
      </div>
    </Link>
  );
};

export default PageNavButton;

import React from "react";
import cn from "classnames";
import { Link } from "gatsby";
import * as styles from "./styles.module.scss";

interface IProps {
  disabled?: boolean;
  isActivePage?: boolean;
  title: string;
  slug: {
    current: string;
  };
}

const PageLink = ({ disabled, isActivePage, title, slug }: IProps) => (
  <div className={cn(`h3`, styles.container)}>
    {disabled ? (
      <div className={styles.disabledLink}>{title}</div>
    ) : (
      <Link
        className={cn(styles.listItem, {
          [styles.activePage]: isActivePage
        })}
        to={`/${slug.current}`}
      >
        {title}
      </Link>
    )}
  </div>
);

export default PageLink;

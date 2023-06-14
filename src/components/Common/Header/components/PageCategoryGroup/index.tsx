import React from "react";
import { useApp } from "~hooks";
import cn from "classnames";
import { PageLink } from "~components";
import * as styles from "./styles.module.scss";
import { TPage } from "src/hooks/usePageNavigation";

interface IProps {
  title: string;
  pages: TPage[];
}

const PageCategoryGroup = ({ title: categoryTitle, pages }: IProps) => {
  const { pathname } = useApp();

  return (
    <div className={styles.container}>
      <h4 className={cn(styles.heading, `caption`)}>{categoryTitle}</h4>

      <ul className={styles.list}>
        {pages.map(({ title, slug, id, disabled }) => {
          const isActivePage = pathname?.includes(slug.current);

          return (
            <li key={id}>
              <PageLink
                disabled={disabled}
                title={title}
                isActivePage={isActivePage}
                slug={slug}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PageCategoryGroup;

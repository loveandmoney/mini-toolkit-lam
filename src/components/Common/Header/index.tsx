import React from "react";
import cn from "classnames";
import { SVG, PageCategoryGroup } from "~components";
import { useApp, usePageNavigation, useScroll } from "~hooks";
import * as styles from "./styles.module.scss";
import { Link } from "gatsby";
import { TCategory } from "src/hooks/usePageNavigation";

const Header = () => {
  const { isHeaderOpen, setIsHeaderOpen, pathname } = useApp();
  const { pageCategories } = usePageNavigation();
  const { scrollY } = useScroll();
  const SCROLL_THRESHOLD = 100;

  const pagesToDisableTransparentBackground = [`/brand-briefer/`];
  const disableTransparentBackground =
    pagesToDisableTransparentBackground.includes(pathname);

  return (
    <>
      <div
        onClick={() => setIsHeaderOpen(false)}
        aria-hidden
        className={cn(styles.bgOverlay, { [styles.visible]: isHeaderOpen })}
      />

      <header
        className={cn(styles.header, {
          [styles.open]: isHeaderOpen,
          [styles.solidBackground]:
            scrollY >= SCROLL_THRESHOLD || disableTransparentBackground
        })}
      >
        <Link to="/" className={styles.homeLink}>
          <SVG svg="wordmark" className={styles.wordmark} />
        </Link>
        <button
          onClick={() => setIsHeaderOpen((prev) => !prev)}
          type="button"
          className={cn(styles.hamburger, { [styles.open]: isHeaderOpen })}
        >
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </button>
      </header>
      <div className={cn(styles.navContainer, { [styles.open]: isHeaderOpen })}>
        <nav className={styles.nav}>
          <div className={styles.navItems}>
            {pageCategories?.map((category: TCategory) => (
              <div key={category.id} className={styles.categoryGroup}>
                <PageCategoryGroup
                  pages={category.pages}
                  title={category.title}
                />
              </div>
            ))}
          </div>
        </nav>
        <div className={styles.overflowGradientTop} />
        <div className={styles.overflowGradientBottom} />
      </div>
    </>
  );
};

export default Header;

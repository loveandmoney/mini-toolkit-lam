import React from "react";
import { SliceConfig, Grid } from "~components";
import PageNavButton from "./components/PageNavButton";
import { useApp, usePageNavigation } from "~hooks";
import * as styles from "./styles.module.scss";

const PageNavButtons = () => {
  const { pathname } = useApp();

  const { getPrevPage, getNextPage } = usePageNavigation();

  const prevPage = getPrevPage(pathname);
  const nextPage = getNextPage(pathname);

  return (
    <nav id="nav" className={styles.container}>
      <SliceConfig>
        <Grid>
          {prevPage && (
            <PageNavButton
              direction="prev"
              className={styles.prevButton}
              to={`/${prevPage.slug.current}`}
              text={prevPage.title}
            />
          )}
          {nextPage && (
            <PageNavButton
              direction="next"
              className={styles.nextButton}
              to={`/${nextPage.slug.current}`}
              text={nextPage.title}
            />
          )}
        </Grid>
      </SliceConfig>
    </nav>
  );
};

export default PageNavButtons;

import React from "react";
import {
  SliceConfig,
  Grid,
  PageLink,
  IntersectionAnimation
} from "~components";
import { usePageNavigation, useApp } from "~hooks";
import { useInView } from "react-intersection-observer";
import cn from "classnames";
import * as styles from "./styles.module.scss";
import { ISliceConfig } from "~schemas";
import { TPage } from "src/hooks/usePageNavigation";

interface IProps {
  data: {
    sliceConfig: ISliceConfig;
  };
}

const Menulist = ({ data: { sliceConfig } }: IProps) => {
  const { pageCategories, getOverallPagePosition } = usePageNavigation();
  const { pathname } = useApp();

  const { ref, inView } = useInView({
    rootMargin: `-90px`
  });

  const getLinkAnimationDelay = (page: TPage) => {
    const pagePosition = getOverallPagePosition(page);
    const delay = pagePosition * 60;
    return delay;
  };

  return (
    <nav ref={ref}>
      <SliceConfig config={sliceConfig}>
        {pageCategories?.map((category, i) => (
          <div className={styles.categoryGroup} key={i}>
            <Grid>
              <h4 className={cn(`b1`, styles.categoryTitle)}>
                {category.title}
              </h4>

              <ul className={styles.links}>
                {category.pages.map((page) => {
                  const isActivePage = pathname?.includes(page.slug.current);

                  return (
                    <IntersectionAnimation
                      key={page.id}
                      animation="fade"
                      trigger={inView}
                      className={styles.listItem}
                      delay={getLinkAnimationDelay(page)}
                    >
                      <li>
                        <PageLink
                          disabled={page.disabled}
                          title={page.title}
                          isActivePage={isActivePage}
                          slug={page.slug}
                        />
                      </li>
                    </IntersectionAnimation>
                  );
                })}
              </ul>
            </Grid>
          </div>
        ))}
      </SliceConfig>
    </nav>
  );
};

export default Menulist;

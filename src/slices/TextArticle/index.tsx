import React, { useEffect, useState } from "react";
import {
  SliceConfig,
  Grid,
  PortableTextRenderer,
  IntersectionAnimation,
  Button,
  LinkTag
} from "~components";
import { ILinkTag, ISliceConfig, TLinkInternalOrExternal } from "~schemas";
import cn from "classnames";
import { useInView } from "react-intersection-observer";
import * as styles from "./styles.module.scss";

interface IProps {
  removeTopBorder?: boolean;
  noAnimation?: boolean;
  data: {
    _rawLeftColumn?: any;
    _rawRightColumn?: any;
    links: TLinkInternalOrExternal[];
    sliceConfig?: ISliceConfig;
    tags: ILinkTag[];
  };
}

const TextArticle = ({
  data: { _rawLeftColumn, _rawRightColumn, links, tags, sliceConfig },
  noAnimation,
  removeTopBorder
}: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    rootMargin: `-90px`
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section ref={ref}>
      {!removeTopBorder && (
        <div
          className={cn(styles.border, { [styles.borderVisible]: isVisible })}
        />
      )}
      <SliceConfig config={sliceConfig}>
        <Grid>
          {_rawLeftColumn && (
            <div className={styles.leftColumn}>
              <IntersectionAnimation trigger={isVisible || noAnimation}>
                <PortableTextRenderer rawText={_rawLeftColumn} />
              </IntersectionAnimation>

              {tags?.[0] && (
                <IntersectionAnimation delay={150} className={styles.linkTags}>
                  {tags.map((tag, i) => (
                    <LinkTag
                      key={i}
                      linkType={tag.linkType}
                      hoverColor={tag.hoverColor}
                      linkExternal={tag.linkExternal}
                      linkInternal={tag.linkInternal}
                    />
                  ))}
                </IntersectionAnimation>
              )}
            </div>
          )}
          {_rawRightColumn && (
            <div className={styles.rightColumn}>
              <IntersectionAnimation
                delay={noAnimation ? 0 : 150}
                trigger={isVisible || noAnimation}
              >
                <PortableTextRenderer rawText={_rawRightColumn} />
              </IntersectionAnimation>

              {links?.[0] && (
                <IntersectionAnimation delay={300} className={styles.buttons}>
                  {/* <div className={styles.links}> */}
                  {links?.map((link, i) => {
                    if (link._type === `linkInternal`) {
                      return (
                        <IntersectionAnimation
                          animation="fadeGrow"
                          delay={300 + 100 * i}
                        >
                          <Button
                            key={i}
                            to={`/${link.reference.slug.current}`}
                          >
                            {link.title}
                          </Button>
                        </IntersectionAnimation>
                      );
                    }

                    if (link._type === `linkExternal`) {
                      return (
                        <IntersectionAnimation
                          animation="fadeGrow"
                          delay={300 + 100 * i}
                        >
                          <Button key={i} href={link.url}>
                            {link.title}
                          </Button>
                        </IntersectionAnimation>
                      );
                    }

                    return null;
                  })}
                  {/* </div> */}
                </IntersectionAnimation>
              )}
            </div>
          )}
        </Grid>
      </SliceConfig>
    </section>
  );
};

export default TextArticle;

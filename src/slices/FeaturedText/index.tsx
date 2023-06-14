import React from "react";
import {
  Button,
  SliceConfig,
  PortableTextRenderer,
  IntersectionAnimation
} from "~components";
import { ISliceConfig } from "~schemas";
import * as styles from "./styles.module.scss";

interface IProps {
  data: {
    links: {
      _type: "linkInternal" | "linkExternal";
      title: string;
      url?: string;
      reference?: {
        slug: {
          current: string;
        };
      };
    }[];
    _rawText: any;
    sliceConfig: ISliceConfig;
  };
}

const FeaturedText = ({ data: { links, _rawText, sliceConfig } }: IProps) => (
  <section>
    <SliceConfig config={sliceConfig}>
      <div className={styles.content}>
        <IntersectionAnimation>
          <PortableTextRenderer rawText={_rawText} />
        </IntersectionAnimation>

        {links?.[0] && (
          <IntersectionAnimation delay={150}>
            <div className={styles.links}>
              {links?.map((link, i) => {
                if (link._type === `linkInternal`) {
                  return (
                    <Button key={i} to={`/${link.reference?.slug.current}`}>
                      {link.title}
                    </Button>
                  );
                }

                if (link._type === `linkExternal`) {
                  return (
                    <Button key={i} href={link.url}>
                      {link.title}
                    </Button>
                  );
                }

                return null;
              })}
            </div>
          </IntersectionAnimation>
        )}
      </div>
    </SliceConfig>
  </section>
);

export default FeaturedText;

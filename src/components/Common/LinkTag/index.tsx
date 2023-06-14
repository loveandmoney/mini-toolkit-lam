import React from "react";
import { Link } from "gatsby";
import cn from "classnames";
import * as styles from "./styles.module.scss";
import { ILinkTag } from "~schemas";

const LinkTag = ({
  linkType,
  hoverColor,
  linkInternal,
  linkExternal
}: ILinkTag) => {
  const customHoverStyle = {
    "--hover-bg-color": hoverColor.hex
  } as React.CSSProperties;

  return (
    <div style={customHoverStyle}>
      {linkType === `internal` && (
        <Link
          to={`/${linkInternal.reference.slug.current}`}
          className={cn(`caption`, styles.linkTag)}
        >
          {linkInternal.title}
        </Link>
      )}
      {linkType === `external` && (
        <a
          href={linkExternal.url}
          target={linkExternal.newWindow ? `_blank` : `_self`}
          rel="noopener noreferrer"
          className={cn(`caption`, styles.linkTag)}
        >
          {linkExternal.title}
        </a>
      )}
    </div>
  );
};

export default LinkTag;

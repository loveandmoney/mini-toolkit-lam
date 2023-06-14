import React from "react";
import { PortableText } from "@portabletext/react";
import cn from "classnames";
import * as styles from "./styles.module.scss";

interface IProps {
  rawText: any;
  className?: string;
}

const customComponents = {
  listItem: {
    number: ({ children }: any) => {
      const nodeStyle = children.props.node.style;
      return (
        <li className={cn(styles.orderedListItem, nodeStyle)}>{children}</li>
      );
    },
    bullet: ({ children }: any) => {
      const nodeStyle = children.props.node.style;
      return (
        <li className={cn(styles.unorderedListItem, nodeStyle)}>{children}</li>
      );
    }
  },
  block: {
    normal: ({ children }: any) => <p className="b1">{children}</p>,
    d1: ({ children }: any) => <h2 className="d1">{children}</h2>,
    h1: ({ children }: any) => <h2 className="h1">{children}</h2>,
    h2: ({ children }: any) => <h3 className="h2">{children}</h3>,
    h3: ({ children }: any) => <h4 className="h3">{children}</h4>,
    b1: ({ children }: any) => <p className="b1">{children}</p>,
    b2: ({ children }: any) => <p className="b2">{children}</p>,
    caption: ({ children }: any) => <p className="caption">{children}</p>,
    button: ({ children }: any) => <p className="button">{children}</p>,
    underline: ({ children }: any) => <p className="underline">{children}</p>
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = value.href.startsWith("/")
        ? undefined
        : "noreferrer noopener";
      return (
        <a style={{ textDecoration: `underline` }} href={value.href} rel={rel}>
          {children}
        </a>
      );
    }
  }
};

const PortableTextRenderer = ({ rawText, className }: IProps) => (
  <div className={cn(styles.container, className)}>
    <PortableText value={rawText} components={customComponents} />
  </div>
);

export default PortableTextRenderer;

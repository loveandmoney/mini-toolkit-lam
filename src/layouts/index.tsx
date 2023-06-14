import React from "react";
import cn from "classnames";
import {
  NoJs,
  Theme,
  Header,
  PageNavButtons,
  Footer,
  Notification
} from "~components";
import * as styles from "./styles.module.scss";
import "~node_modules/modern-normalize/modern-normalize.css";
import "~styles/global.css";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: IProps) => (
  <>
    <NoJs />
    <Theme />
    <div className={cn(styles.container, className)}>{children}</div>
    <Header />
    <PageNavButtons />
    <Footer />
    <Notification />
  </>
);

export default Layout;

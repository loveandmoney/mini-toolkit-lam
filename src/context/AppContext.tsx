import React, { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { globalHistory } from "@reach/router";
import * as styles from "~styles/disableScroll.module.scss";
import { INotification } from "~components";

interface IPagePasswordStatus {
  [key: string]: `locked` | `unlocked`;
}

export interface IAppContext {
  isHeaderOpen: boolean;
  setIsHeaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
  notification: INotification;
  updateNotification: (newMessage: string) => void;
  pagePasswordStatus: IPagePasswordStatus;
  setPagePasswordStatus: React.Dispatch<
    React.SetStateAction<IPagePasswordStatus>
  >;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

interface IProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IProps) => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [pathname, setPathname] = useState(``);
  const [notification, setNotification] = useState<INotification>({
    message: ``,
    keyToggle: 0
  });
  const [pagePasswordStatus, setPagePasswordStatus] =
    useState<IPagePasswordStatus>({});

  useEffect(() => {
    if (typeof window !== `undefined` && window?.location?.pathname) {
      setPathname(window.location.pathname);
    }

    return globalHistory.listen(({ location }) => {
      setPathname(location.pathname);
    });
  }, []);

  // Close menu on page change
  useEffect(() => {
    if (isHeaderOpen) {
      setIsHeaderOpen(false);
    }
  }, [pathname]);

  // Disable page scroll
  useEffect(() => {
    if (isHeaderOpen) {
      document.body.classList.add(styles.disableScroll);
    } else {
      document.body.classList.remove(styles.disableScroll);
    }
  }, [isHeaderOpen]);

  // Notification
  const updateNotification = (newMessage: string) => {
    setNotification((prev) => ({
      message: newMessage,
      keyToggle: prev.keyToggle === 0 ? 1 : 0
    }));
  };

  // ---------------------------------------------------------------------------
  // render

  const contextProps = useMemo(
    () => ({
      isHeaderOpen,
      setIsHeaderOpen,
      pathname,
      pagePasswordStatus,
      setPagePasswordStatus,
      notification,
      updateNotification
    }),
    [
      isHeaderOpen,
      setIsHeaderOpen,
      pathname,
      pagePasswordStatus,
      setPagePasswordStatus,
      notification,
      updateNotification
    ]
  );

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;

import React from "react";
import { useApp } from "~hooks";
import * as styles from "./styles.module.scss";

export interface INotification {
  message: string;
  keyToggle: 0 | 1;
}

const Notification = () => {
  const { notification } = useApp();

  if (!notification.message) return null;

  return (
    <div className={styles.container} key={notification.keyToggle}>
      <p className={styles.notification}>{notification.message}</p>
    </div>
  );
};

export default Notification;

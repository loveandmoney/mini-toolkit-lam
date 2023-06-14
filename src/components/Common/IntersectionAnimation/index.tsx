import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useInView } from "react-intersection-observer";
import * as styles from "./styles.module.scss";

type TAnimations = "fade" | "fadeUp" | "fadeGrow";

interface IProps {
  children: React.ReactNode;
  animation?: TAnimations;
  transition?: number;
  margin?: string;
  delay?: number;
  trigger?: boolean;
  className?: string;
}

const IntersectionAnimation = ({
  children,
  animation = `fadeUp`,
  transition = 0.6,
  margin = `-90px`,
  delay = 0,
  trigger,
  className
}: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    rootMargin: margin
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (trigger) {
      setIsVisible(true);
    }
  }, [trigger]);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${transition}s`
      }}
      className={cn(className, styles.container, {
        [styles.fade]: animation === `fade`,
        [styles.fadeUp]: animation === `fadeUp`,
        [styles.fadeGrow]: animation === `fadeGrow`,
        [styles.visible]: isVisible
      })}
    >
      {children}
    </div>
  );
};

export default IntersectionAnimation;

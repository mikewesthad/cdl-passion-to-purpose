import React from "react";
import style from "./index.css";

const classNameMap = {
  appear: style.appear,
  appearActive: style.appearActive,
  enter: style.enter,
  enterActive: style.enterActive,
  enterDone: style.enterDone,
  exit: style.exit,
  exitActive: style.exitActive,
  exitDone: style.exitDone
};

export default function PageTransition({ pageKey }) {
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={pageKey} timeout={0} classNames={style}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}

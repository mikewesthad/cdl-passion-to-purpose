import React, { PureComponent } from "react";
import style from "./index.module.scss";

export default class Fill extends PureComponent {
  render() {
    return <div className={style.timelineFill} style={percentage} />;
  }
}

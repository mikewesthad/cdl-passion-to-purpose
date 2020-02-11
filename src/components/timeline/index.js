import React, { PureComponent } from "react";
import style from "./index.module.scss";

export default class Timeline extends PureComponent {
  render() {
    console.log(this.props.fill);
    return (
      <div className={style.timelineContainer}>
        <div className={style.timeline}>{this.props.children}</div>
        <div
          className={style.timelineFill}
          style={{ transform: "scaleX(" + this.props.fill + ")" }}
        />
      </div>
    );
  }
}

import React, { PureComponent } from "react";
import style from "./index.module.scss";
import TimelineFill from "../timeline/inner-timeline";

export default class Timeline extends PureComponent {
  render() {
    return (
      <div className={style.timelineContainer}>
        <div className={style.timeline}>
          {this.props.children} <TimelineFill percentage={10} />
        </div>
      </div>
    );
  }
}

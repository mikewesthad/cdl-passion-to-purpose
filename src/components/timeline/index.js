import React, { PureComponent } from "react";
import style from "./index.module.scss";
//import TimelineFill from "../timeline/inner-timeline";

const percentage = {
  width: "20%"
};

export default class Timeline extends PureComponent {
  render() {
    return (
      <div className={style.timelineContainer}>
        <div className={style.timeline}>
          {this.props.children} <div className={style.timelineFill} style={percentage} />
        </div>
      </div>
    );
  }
}

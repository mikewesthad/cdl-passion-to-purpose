import React, { PureComponent } from "react";
import style from "./index.module.scss";
//import TimelineFill from "../timeline/inner-timeline";

const percentage = {
  width: "10%"
};

export default class Timeline extends PureComponent {
  render() {
    const test = this.props; /* is this what i want to do ... idk */
    return (
      <div className={style.timelineContainer}>
        <div className={style.timeline}>
          {this.props.children} <div className={style.timelineFill} style={percentage} />
        </div>
      </div>
    );
  }
}

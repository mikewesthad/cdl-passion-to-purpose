import React, { PureComponent } from "react";
import style from "./index.module.scss";
import OuterTimeline from "../timeline/outer-timeline";
import TimelineFill from "../timeline/inner-timeline";

const Chicken = <div>Chicken</div>;

export default class Timeline extends PureComponent {
  render() {
    return (
      <div className={style.timelineContainer}>
        <OuterTimeline>
          {/*{Chicken}*/}
          <TimelineFill />
        </OuterTimeline>
      </div>
    );
  }
}

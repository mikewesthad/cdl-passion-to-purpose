import React, { PureComponent } from "react";
import style from "./index.module.scss";

export default class Timeline extends PureComponent {
  render() {
    return (
      <div className={style.timelineContainer}>
        <div className={style.timeline}>
          {this.props.children}
          <div className={style.timelineFill} style={this.props.testing} />
        </div>
      </div>
    );
  }
}

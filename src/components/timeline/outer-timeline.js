import React, { PureComponent } from "react";
import style from "./index.module.scss";

export default class Timeline extends PureComponent {
  render() {
    console.log(this.props);

    return (
      <div className={style.timeline}>
        {this.props.children}
        {/* The line below needs to move to its own thing */}
        {/*<div className={style.timelineFill} />*/}
      </div>
    );
  }
}

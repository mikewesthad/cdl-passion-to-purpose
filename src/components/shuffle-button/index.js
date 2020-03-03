import React, { Component } from "react";
import { ReactComponent as ShuffleSvg } from "../../images/shuffle.svg";
import style from "./index.module.scss";

export default class ShuffleButton extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className={style.button}>
          <ShuffleSvg />
        </div>
      </div>
    );
  }
}

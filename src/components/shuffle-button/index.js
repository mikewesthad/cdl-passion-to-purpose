import React, { Component } from "react";
import { ReactComponent as ShuffleSvg } from "../../images/shuffle.svg";
import style from "./index.module.scss";
import classNames from "classnames";

export default class ShuffleButton extends Component {
  render() {
    const { className, disabled, ...otherProps } = this.props;
    return (
      <button className={classNames(style.button, className)} disabled={disabled} {...otherProps}>
        <ShuffleSvg />
      </button>
    );
  }
}

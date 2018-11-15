import React, { PureComponent } from "react";
import classNames from "classnames";
import style from "./index.module.scss";

export default class Button extends PureComponent {
  // Prevent focus on click
  onMouseDown = event => {
    event.preventDefault();
    if (this.props.onMouseDown) this.props.onMouseDown();
  };

  render() {
    const { className, onClick, children, ...otherProps } = this.props;
    return (
      <button
        onMouseDown={this.onMouseDown}
        onClick={onClick}
        className={classNames(style.button, className)}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}

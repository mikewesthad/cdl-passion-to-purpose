import React, { Component } from "react";
import classNames from "classnames";
import style from "./index.module.scss";

class Checkbox extends Component {
  render() {
    const { id, value, onChange, checked, label, ...otherProps } = this.props;

    return (
      <>
        <input
          type="checkbox"
          className={style.input}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          checked={checked}
          {...otherProps}
        />
        <label htmlFor={id} className={classNames(style.label, checked && style.labelChecked)}>
          {label}
        </label>
      </>
    );
  }
}

export default Checkbox;

import React, { Component } from "react";
import { ReactComponent as LogoSvg } from "../../images/generate.svg";
import style from "./index.module.scss";

export default class GenerateAttribution extends Component {
  render() {
    return (
      <div {...this.props}>
        <LogoSvg className={style.logo} />
      </div>
    );
  }
}

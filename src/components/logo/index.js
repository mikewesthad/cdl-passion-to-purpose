import React, { Component } from "react";
import { ReactComponent as LogoSvg } from "../../images/cdl-logo.svg";
import style from "./index.module.scss";

export default class Logo extends Component {
  render() {
    return <LogoSvg className={style.logo} />;
  }
}

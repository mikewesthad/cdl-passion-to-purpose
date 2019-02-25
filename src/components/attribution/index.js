import React, { Component } from "react";
import { ReactComponent as LogoSvg } from "../../images/cdl-logo.svg";
import style from "./index.module.scss";

export default class Attribution extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className={style.attributionText}>A free tool built by:</div>
        <a className={style.logoLink} href="https://convergencedesignlab.org/">
          <LogoSvg className={style.logo} />
        </a>
      </div>
    );
  }
}

import React, { Component } from "react";
import { ReactComponent as LogoSvg } from "../../images/cdl-logo.svg";
import style from "./index.module.scss";

export default class Attribution extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className={style.attributionText}>
          Designed by: Convergence Design Lab, Columbia College Chicago, Margaret Conway, Mindy
          Faber, Michael Hadley, Henry Hoare and Lorelei Miyamura &copy; 2019
        </div>
        <a
          href="https://convergencedesignlab.org/"
          className={style.logoLink}
          onClick={event => {
            event.preventDefault();
            window.open("https://convergencedesignlab.org/");
          }}
        >
          <LogoSvg className={style.logo} />
        </a>
      </div>
    );
  }
}

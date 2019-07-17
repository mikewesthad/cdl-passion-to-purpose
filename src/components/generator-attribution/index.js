import React, { Component } from "react";
import { ReactComponent as LogoSvg } from "../../images/generate.svg";
import Button from "../nav/button";
import { ReactComponent as ShuffleSvg } from "../../images/shuffle.svg";
import style from "./index.module.scss";

export default class GenerateAttribution extends Component {
  render() {
    return (
      <div {...this.props}>
        <LogoSvg className={style.logo} />
        <nav className={style.nav}>
          <Button>
            <ShuffleSvg />
          </Button>
        </nav>
      </div>
    );
  }
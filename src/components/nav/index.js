import React, { PureComponent } from "react";
import Button from "./button/";
import { ReactComponent as RestartSvg } from "../../images/home.svg"; //previously restart.svg
import { ReactComponent as BackSvg } from "../../images/back.svg";
import style from "./index.module.scss";

export default class Nav extends PureComponent {
  render() {
    const { disabled = false, onBack, onRestart } = this.props;
    return (
      <nav className={style.nav}>
        <Button className={style.back} disabled={disabled} onClick={onBack}>
          <BackSvg />
        </Button>
        <Button className={style.restart} disabled={disabled} onClick={onRestart}>
          <RestartSvg />
        </Button>
      </nav>
    );
  }
}

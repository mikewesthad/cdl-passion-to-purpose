import React, { PureComponent } from "react";
import Button from "./button/";
import style from "./index.module.scss";

export default class Nav extends PureComponent {
  render() {
    const { disabled = false, onBack, onRestart } = this.props;
    return (
      <nav className={style.nav}>
        <Button className={style.back} disabled={disabled} onClick={onBack}>
          ←
        </Button>
        <Button className={style.restart} disabled={disabled} onClick={onRestart}>
          ⭯
        </Button>
      </nav>
    );
  }
}

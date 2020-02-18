import React, { PureComponent } from "react";
import Button from "../nav/button";
import { ReactComponent as DownloadSvg } from "../../images/download.svg"; //previously restart.svg
import style from "./index.module.scss";

export default class Nav extends PureComponent {
  printOrder = () => {
    const something = "wow";
    const oldPage = document.body.innerHTML;
    document.body.innerHTML = something;
    window.print();
    document.body.innerHTML = oldPage;
  };
  render() {
    const { disabled = false, onBack } = this.props;
    return (
      <div className={style.downloadContainer}>
        <Button className={style.download} disabled={disabled} onClick={() => this.printOrder()}>
          <DownloadSvg />
        </Button>
      </div>
    );
  }
}

import React, { PureComponent } from "react";
import Button from "../nav/button";
import { ReactComponent as DownloadSvg } from "../../images/download.svg"; //previously restart.svg
import style from "./index.module.scss";
import jsPDF from "jspdf";

export default class Nav extends PureComponent {
  savePDF = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "px",
      format: "letter"
    });
    doc.fromHTML("chicken");
    doc.save("hmw.pdf");
  };
  render() {
    const { disabled = false, onBack } = this.props;
    return (
      <div className={style.downloadContainer}>
        <Button className={style.download} disabled={disabled} onClick={() => this.savePDF()}>
          <DownloadSvg />
        </Button>
      </div>
    );
  }
}

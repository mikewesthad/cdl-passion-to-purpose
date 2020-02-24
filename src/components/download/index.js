import React, { PureComponent } from "react";
import Button from "../nav/button";
import { observer, inject } from "mobx-react";
import { ReactComponent as DownloadSvg } from "../../images/download.svg"; //previously restart.svg
import style from "./index.module.scss";
import jsPDF from "jspdf";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    const gameData = this.props.gameData;
  }

  savePDF = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "px",
      format: "letter"
    });
    const testing = "" + this.props.gameData.passionStore.responses[0];
    doc.fromHTML(testing + "chicken");
    doc.save("hmw.pdf");
  };

  render() {
    const { disabled = false, onBack, gameData } = this.props;
    console.log(this.props.gameData.passionStore.responses[0]);
    return (
      <div className={style.downloadContainer}>
        <Button className={style.download} disabled={disabled} onClick={() => this.savePDF()}>
          <DownloadSvg />
        </Button>
      </div>
    );
  }
}

export default inject("gameData")(observer(Nav));

import React from "react";
import Button from "../nav/button";
import { observer, inject } from "mobx-react";
import { ReactComponent as DownloadSvg } from "../../images/download.svg"; //previously restart.svg
import style from "./index.module.scss";
import jsPDF from "jspdf";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.userResponses = React.createRef();
  }

  savePDF = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "px",
      format: "letter"
    });
    const journeyMap = this.userResponses.current;
    doc.fromHTML(journeyMap);
    // doc.addPage();
    doc.save("hmw.pdf");
  };

  render() {
    const { disabled = false, gameData } = this.props;

    return (
      <div className={style.downloadContainer}>
        <Button className={style.download} disabled={disabled} onClick={() => this.savePDF()}>
          <DownloadSvg />
        </Button>
        <div className={style.hidden} ref={this.userResponses}>
          <div className={style.generatedQuestion}>
            <span className={style.bolded}>How might we use </span>
            <span className={style.generatedPassion}>
              {gameData.passionStore.responses[gameData.chosenPassionIndex]}
            </span>
            <span className={style.bolded}> to </span>
            <span className={style.generatedPurpose}>
              {gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex]}?
            </span>
          </div>
          <div className={style.generatedQuestion}>
            <h1>You started off by pondering your passions.</h1>
            <div className="description">
              <div className={style.centerRight}>
                1. {gameData.passionStore.questions[0].replace("...", " ")}{" "}
                {gameData.passionStore.responses[0]}.<br />
                2. {gameData.passionStore.questions[1].replace("...", " ")}{" "}
                {gameData.passionStore.responses[1]}.<br />
                3. {gameData.passionStore.questions[2].replace("...", " ")}{" "}
                {gameData.passionStore.responses[2]}.<br />
                4. {gameData.passionStore.questions[3].replace("...", " ")}
                {gameData.passionStore.responses[3]}.
              </div>
            </div>
          </div>
          <div className={style.generatedQuestion}>
            <h1>Then you took a look at your purpose.</h1>
            <div className="description">
              <div className={style.centerRight}>
                1. I want to {gameData.getPurposesWithVerb()[0]}.<br />
                2. I want to {gameData.getPurposesWithVerb()[1]}.<br />
                3. I want to {gameData.getPurposesWithVerb()[2]}.<br />
                4. I want to {gameData.getPurposesWithVerb()[3]}.
              </div>
            </div>
          </div>
          <div className={style.generatedQuestion}>
            Next, you juxtaposed your passions and purposes <br />
            Combining them into a "How Might We" design question. <br />
            Your selected HMW question shown below: <br />
            <div className={style.generatedQuestion}>
              <span className={style.bolded}>How might we use </span>
              <span className={style.generatedPassion}>
                {gameData.passionStore.responses[gameData.chosenPassionIndex]}
              </span>
              <span className={style.bolded}> to </span>
              <span className={style.generatedPurpose}>
                {gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex]}?
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default inject("gameData")(observer(Nav));

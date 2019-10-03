import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import style from "./index.module.scss";
import SocialShare from "../../components/social-share";
import Attribution from "../../components/attribution";
import FacilitatorAttribution from "../../components/facilitator-attribution";
import Survey from "../../components/survey";
import ReactDOM from "react-dom";
import jsPDF from "jspdf";

const noop = () => {};

class JourneyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { combinationNumber: 0 };
    this.elementRef = React.createRef();
  }

  savePDF = () => {
    // See https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
    const doc = new jsPDF({
      orientation: "p",
      unit: "px",
      format: "letter"
    });
    // HTML element to render, using React's API for accessing DOM elements:
    // https://reactjs.org/docs/refs-and-the-dom.html
    const element = this.elementRef.current;
    const margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    const options = {
      width: 500
    };
    // See example usage from repo: https://github.com/MrRio/jsPDF/blob/b9f932cd2e22c82db0a39f0225521945a2568809/examples/basic.html#L357
    // DOM element, x pos to render on page, y pos to render on page, callback, options
    doc.fromHTML(element, margins.left, margins.right, options, noop, margins);
    doc.save("hmw.pdf");
  };

  getNextCombination = () => {
    this.setState(prev => {
      return { combinationNumber: prev.combinationNumber + 1 };
    });
  };

  render() {
    const { gameData } = this.props;
    const passion = gameData.passionStore.responses[gameData.chosenPassionIndex];
    const purpose = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex];
    return (
      //<div className="pdfContainer" ref={this.elementRef}>
      <Container>
        <h1 className="title">Journey Map</h1>
        <hr />
        {/* 
          <div className="title" ref={this.elementRef}>
            <button onClick={this.savePDF}>Generate PDF</button>
          </div>
*/}
        <div className={style.generatedQuestion}>
          <span className={style.bolded}>How might we use </span>
          <span className={style.generatedPassion}>{passion}</span>
          <span className={style.bolded}> to </span>
          <span className={style.generatedPurpose}>{purpose}?</span>
        </div>

        <hr />

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>Let's make a </span>
          <span className={style.generatedPassion}>{gameData.medium}</span>
          <span className={style.bolded}> to </span>
          <span className={style.generatedPurpose}>{gameData.impact}!</span>
        </div>

        <hr />

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>You started off by pondering your passions.</span>
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

        <hr />

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>Then you took a look at your purpose.</span>
          <div className="description">
            <div className={style.centerRight}>
              1. I want to {gameData.getPurposesWithVerb()[0]}.<br />
              2. I want to {gameData.getPurposesWithVerb()[1]}.<br />
              3. I want to {gameData.getPurposesWithVerb()[2]}.<br />
              4. I want to {gameData.getPurposesWithVerb()[3]}.
            </div>
          </div>
        </div>

        <hr />

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>Next, you juxtaposed your passions and purposes</span>
          <div className="description">Combining them into a "How Might We" design question.</div>
          <div className="description">Your selected HMW question shown below:</div>
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
        <hr />

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>
            Next you began exploring ways to answer your “How Might We” question by choosing a
            medium and an impact goal.
          </span>
          <div className="description">
            How Might We use {passion} to {purpose}?
          </div>
        </div>

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>You started by browsing through your medium options</span>
          <div className="description">
            You selected the {gameData.medium} category &amp; then took a peek at then took a peek
            at a sample project.
          </div>
        </div>

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>Then you selected your impact goal.</span>
          <div className="description">You decided that your project should {gameData.impact}.</div>
        </div>
        <hr />
        <div className={style.generatedQuestion}>
          <span className={style.bolded}>
            Finally, we combined your selected media and impact to give you an actionable "Let's
            Make" prompt!
          </span>
        </div>
        <div className={style.generatedQuestion}>
          <span className={style.bolded}>Let's make </span>
          <span className={style.generatedPassion}>{gameData.medium}</span>
          <span className={style.bolded}> to </span>
          <span className={style.generatedPurpose}>{gameData.impact}!</span>
        </div>
        <span className={style.bolded}>Congratulations on your great work!</span>
        <hr />
        <form />

        <div className="text-center">
          <SocialShare passion={gameData.passionStore.responses[gameData.chosenPassionIndex]} />
        </div>
        <FacilitatorAttribution style={{ marginTop: "2rem", textAlign: "center" }} />
        <Survey style={{ marginTop: "2rem", textAlign: "center" }} />
        <Attribution style={{ marginTop: "2rem", textAlign: "center" }} />
      </Container>
      //  </div>
    );
  }
}
const rootElement = document.getElementById("root");
export default inject("gameData")(observer(JourneyMap));

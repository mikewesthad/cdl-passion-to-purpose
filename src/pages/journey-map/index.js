import React from "react";
//import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import style from "./index.module.scss";
import SocialShare from "../../components/social-share";
import Attribution from "../../components/attribution";
import FacilitatorAttribution from "../../components/facilitator-attribution";

class JourneyMap extends React.Component {
  constructor(props) {
    super(props);

    const gameData = this.props.gameData;
    this.state = { combinationNumber: 0 };
  }

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
      <Container>
        <h1 className="title">Journey Map</h1>
        <hr />

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
          <span className={style.bolded}>We started off by dissecting your passions.</span>
          <div className="description">
            1. {gameData.passionPrompts[0]} {gameData.passionStore.responses[0]}.<br />
            2. {gameData.passionPrompts[1]} {gameData.passionStore.responses[1]}.<br />
            3. {gameData.passionPrompts[2]} {gameData.passionStore.responses[2]}.<br />
            4. {gameData.passionPrompts[3]} {gameData.passionStore.responses[3]}.
          </div>
        </div>

        <hr />

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>Then we took a look at your purpose.</span>
          <div className="description">
            1. {gameData.purposePrompts[0]} {gameData.purposeStore.responses[0]}.<br />
            2. {gameData.purposePrompts[1]} {gameData.purposeStore.responses[1]}.<br />
            3. {gameData.purposePrompts[2]} {gameData.purposeStore.responses[2]}.<br />
            4. {gameData.purposePrompts[3]} {gameData.purposeStore.responses[3]}.
          </div>
        </div>

        <hr />

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>Next, we juxtaposed your passions and purposes</span>
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
          <span className={style.bolded}>So, we went through and unpacked your selection.</span>
          <div className="description">
            How Might We use {passion} to {purpose}?
          </div>
          <div className="description">We wanted to discover the solution to this question.</div>
          <div className="description">
            In order to do so, you had to explore your medium and impact.
          </div>
        </div>

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>Something</span>
          <div className="description" />
        </div>
        <form />

        <div className="text-center">
          <SocialShare passion={gameData.passionStore.responses[gameData.chosenPassionIndex]} />
        </div>
        <Attribution style={{ marginTop: "2rem", textAlign: "center" }} />
        <FacilitatorAttribution style={{ marginTop: "2rem", textAlign: "center" }} />
      </Container>
    );
  }
}

export default inject("gameData")(observer(JourneyMap));

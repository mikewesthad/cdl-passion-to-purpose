import React from "react";
//import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import style from "./index.module.scss";
import SocialShare from "../../components/social-share";

class JourneyMap extends React.Component {
  constructor(props) {
    super(props);

    const gameData = this.props.gameData;
    this.state = { combinationNumber: 0 };
  }

  componentDidMount() {
    const gameData = this.props.gameData;
    gameData.saveToFirebase();
  }

  getNextCombination = () => {
    this.setState(prev => {
      return { combinationNumber: prev.combinationNumber + 1 };
    });
  };

  render() {
    const { gameData } = this.props;
    return (
      <Container>
        <h1 className="title">Journey Map</h1>
        <hr />

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

        <hr />

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>Let's make a</span>
          <span className={style.generatedPassion}>medium</span>
          <span className={style.bolded}> to </span>
          <span className={style.generatedPurpose}>
            {gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex]}!
          </span>
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

        <div className="description">
          Congratulations You have transformed your passion and purpose into a design question. So
          what’s the next step? To further define a project designers often dig deeper using a
          process called ideation.
        </div>

        <form />

        <div className="text-center">
          <SocialShare passion={gameData.passionStore.responses[gameData.chosenPassionIndex]} />
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(JourneyMap));

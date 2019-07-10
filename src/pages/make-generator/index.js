import React from "react";
//import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import SocialShare from "../../components/social-share";
import style from "./index.module.scss";

class Generator extends React.Component {
  constructor(props) {
    super(props);

    const gameData = this.props.gameData;
    gameData.generateCombinations();
    this.state = { combinationNumber: 0 };
  }

  componentDidMount() {
    const gameData = this.props.gameData;
    gameData.saveToFirebase();
  }

  getNextCombination = () => {
    this.setState(prev => {
      // TODO: save combo number to DB
      return { combinationNumber: prev.combinationNumber + 1 };
    });
  };

  render() {
    const { gameData } = this.props;
    const { combinationNumber } = this.state;
    const combinations = gameData.combinations;
    const [passionIndex, purposeIndex] = combinations[combinationNumber % combinations.length];
    //const passion = gameData.passionStore.responses[passionIndex];
    //const purpose = gameData.getPurposesWithVerb()[purposeIndex];

    return (
      <Container>
        <h1 className="title">Next Steps</h1>

        <div className={style.generatedQuestion}>
          How might we use <span className={style.generatedPassion}>{gameData.passion}</span> to{" "}
          <span className={style.generatedPurpose}>{gameData.purpose}</span>? 
        </div>

        <div className="description">
          Try sketching out some ideas to answer your question!
          Exchange questions with a friend and work on ideas together!
        </div>

        <div className="social-container">
          <SocialShare passion={gameData.passion} purpose={gameData.purpose} />
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(Generator));


/*
          <br />
          Let's make a <span className={style.generatedPassion}>{gameData.medium}</span> to{" "}
          <span className={style.generatedPassion}>{gameData.action}</span>
          .
          <div className={style.generateButtonContainer} />

*/ 
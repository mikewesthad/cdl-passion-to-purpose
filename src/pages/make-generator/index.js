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
      return { combinationNumber: prev.combinationNumber + 1 };
    });
  };

  render() {
    const { gameData } = this.props;
    const { combinationNumber } = this.state;
    const combinations = gameData.combinations;
    const [passionIndex, purposeIndex] = combinations[combinationNumber % combinations.length];

    return (
      <Container>
        <h1 className="title">Next Steps</h1>

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>How might we use </span>
          <span className={style.generatedPassion}>{gameData.passion}</span>
          <span className={style.bolded}> to </span>
          <span className={style.generatedPurpose}>{gameData.purpose}?</span>
        </div>

        <div className="description">
          Try sketching out some ideas to answer your question! Exchange questions with a friend and
          work on ideas together!
        </div>

        <div className="social-container">
          <SocialShare passion={gameData.passion} purpose={gameData.purpose} />
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(Generator));

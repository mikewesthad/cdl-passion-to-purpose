import React from "react";
import { Link } from "react-router-dom";
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
    const { gameData, nextRoute } = this.props;
    return (
      <Container>
        <h1 className="title">Next Steps</h1>

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

        <div className="description">
          Congratulations You have transformed your passion and purpose into a design question. So
          what’s the next step? To further define a project designers often dig deeper using a
          process called ideation.
        </div>

        <form />

        <div className="text-center">
          <SocialShare passion={gameData.passionStore.responses[gameData.chosenPassionIndex]} />
        </div>

        <div className="generateButtonContainer" style={{ textAlign: "center" }}>
          <Link className="button" to={nextRoute}>
            Ok! Next Step ➞
          </Link>
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(JourneyMap));

import React from "react";
import { Link } from "react-router-dom";
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

  storeP2P = () => {
    this.props.store.setPurpose(this.render.purpose);
    console.log(this.render.purpose);
  };

  render() {
    const { gameData, nextRoute } = this.props;
    const { combinationNumber } = this.state;
    const combinations = gameData.combinations;
    const [passionIndex, purposeIndex] = combinations[combinationNumber % combinations.length];
    const passion = gameData.passionStore.responses[passionIndex];
    const purpose = gameData.getPurposesWithVerb()[purposeIndex];

    return (
      <Container>
        <div className="step-count">Step 3/6</div>
        <h1 className="title">How might we...?</h1>
        <div className="description">
          Let’s combine your passion and purpose – it’s okay if the ideas are crazy!
        </div>
        <div className={style.generatedQuestion}>
          How might we use <span className={style.generatedPassion}>{passion}</span> to{" "}
          <span className={style.generatedPurpose}>{purpose}</span>?
          <div className={style.generateButtonContainer}>
            <button className="button button__stacked" onClick={this.getNextCombination}>
              Give Me Another
            </button>
          </div>
          <div className="text-center">
            <Link
              className="button"
              to={nextRoute}
              onClick={(gameData.setPurpose(purpose), gameData.setPassion(passion))}
            >
              Continue ➞
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(Generator));

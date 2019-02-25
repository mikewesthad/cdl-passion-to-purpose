import React from "react";
import { observer } from "mobx-react";
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
    const passion = gameData.passionStore.responses[passionIndex];
    const purpose = gameData.getPurposesWithVerb()[purposeIndex];

    return (
      <Container>
        <div className="step-count">Step 3/3</div>
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
        </div>
        <div className="text-center">
          <SocialShare passion={passion} purpose={purpose} />
        </div>
      </Container>
    );
  }
}

export default observer(Generator);

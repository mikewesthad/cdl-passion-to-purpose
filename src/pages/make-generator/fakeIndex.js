import React from "react";
//import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
//import SocialShare from "../../components/social-share";
import style from "./index.module.scss";

class MakeGenerator extends React.Component {
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
    const [mediumIndex, actionIndex, audienceIndex] = combinations[
      combinationNumber % combinations.length
    ];
    const medium = gameData.mediumStore.responses[mediumIndex];
    const audience = gameData.audienceStore.responses[audienceIndex];
    const action = gameData.actionStore.responses[actionIndex];

    return (
      <Container>
        <div className="step-count">Step 8/8</div>
        <h1 className="title">How might we...?</h1>
        <div className={style.generatedQuestion}>
          We Will Make <span className={style.generatedMedium}>{medium}</span> to{" "}
          <span className={style.generatedAction}>{action}</span>/> for{""}
          <span className={style.generatedAudience}>{audience}</span>
          <div className={style.generateButtonContainer}>
            <button className="button button__stacked" onClick={this.getNextCombination}>
              Give Me Another
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(MakeGenerator));

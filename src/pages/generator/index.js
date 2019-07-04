import React from "react";
//import { Link } from "react-router-dom"; //unhash when next page is needed
import { observer, inject } from "mobx-react";
import GeneratorTemplate from "../../components/generator-template";
import GenerateAttribution from "../../components/generator-attribution"; //added 11.6.19
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

  //TODO: cycle through the PassionIndexes
  getNextPassion = () => {
    this.setState(prev => {
      return { combinationNumber: prev.combinationNumber + 1 };
    });
  };

  //TODO: function to cycle through the PurposeIndexes

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
      <GeneratorTemplate>
        <div className={style.generatedQuestion}>
          <span className={style.hmwPreset}>How might we use</span>
          <div className={style.passionContainer}>
            <GenerateAttribution style={{ display: "inline" }} onClick={this.getNextPassion} />
            <span className={style.generatedPassion}>{passion}</span>
          </div>
          <span className={style.hmwPreset}>to</span>
          <div className={style.purposeContainer}>
            <GenerateAttribution style={{ display: "inline" }} onClick={this.getNextCombination} />
            <span className={style.generatedPurpose}>{purpose}?</span>
          </div>
        </div>
        {/*}
        <div className="generateButtonContainer">
          <Link
            className="button"
            to={"home"} //used to be nextRoute, no quotations
            onClick={(gameData.setPurpose(purpose), gameData.setPassion(passion))}
          >
            Restart
          </Link>
    </div>*/}
        <div className="navigation">
          <input className="button submit-button" type="submit" value="Continue with this ➞" />
        </div>
        <div className="social-container">
          <SocialShare passion={passion} purpose={purpose} />
        </div>
      </GeneratorTemplate>
    );
  }
}

export default inject("gameData")(observer(Generator));

import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import GeneratorTemplate from "../../components/generator-template";
import GenerateAttribution from "../../components/generator-attribution"; //added 11.6.19
//import SocialShare from "../../components/social-share";
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
      <GeneratorTemplate>
        <div className={style.generatedQuestion}>
          <span style={{ marginLeft: "3rem" }}>How might we use</span> <br />
          <GenerateAttribution style={{ textAlign: "left", display: "inline" }} />
          <span className={style.generatedPassion}>{passion}</span> to <br />
          <GenerateAttribution
            style={{ textAlign: "left", display: "inline" }}
            onClick={this.getNextCombination}
          />
          <span className={style.generatedPurpose}>{purpose}</span>?
        </div>
        <div className="generateButtonContainer">
          <Link
            className="button"
            onClick={(gameData.setPurpose(purpose), gameData.setPassion(passion))}
          >
            Continue ➞
          </Link>
        </div>
      </GeneratorTemplate>
    );
  }
}

export default inject("gameData")(observer(Generator));

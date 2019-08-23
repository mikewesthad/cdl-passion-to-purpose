import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import GeneratorTemplate from "../../components/generator-template";
import GenerateAttribution from "../../components/generator-attribution";
import style from "./index.module.scss";

class Generator extends React.Component {
  constructor(props) {
    super(props);

    const gameData = this.props.gameData;
    gameData.generateCombinations();
    this.state = { passionNum: 0, purposeNum: 0 };
  }

  storeP2P = () => {
    this.props.store.setPurpose(this.render.purpose);
    console.log(this.render.purpose);
  };

  render() {
    const { gameData, nextRoute } = this.props;
    // const { passionNum } = this.state;
    // const { purposeNum } = this.state;
    // const passion = gameData.passionStore.responses[passionNum];
    // const purpose = gameData.getPurposesWithVerb()[purposeNum];

    return (
      <GeneratorTemplate>
        <div className={style.generatedQuestion}>
          <span className={style.hmwPreset}>How might we use</span>
          <div className={style.passionContainer}>
            <GenerateAttribution
              className={style.generatedButton}
              onClick={gameData.incrementPassionIndex}
            />
            <span className={style.generatedPassion}>{gameData.chosenPassionIndex}</span>
          </div>
          <span className={style.hmwPreset}>to</span>
          <div className={style.purposeContainer}>
            <GenerateAttribution
              className={style.generatedButton}
              onClick={gameData.incrementPurposeIndex}
            />
            <span className={style.generatedPurpose}>{gameData.chosenPurposeIndex}?</span>
          </div>
        </div>
        <div className="generateButtonContainer" style={{ textAlign: "center" }}>
          <Link
            className="button"
            to={nextRoute}
            // onClick={(gameData.setPurpose(purpose), gameData.setPassion(passion))}
          >
            Continue with this ➞
          </Link>
        </div>
      </GeneratorTemplate>
    );
  }
}

export default inject("gameData")(observer(Generator));

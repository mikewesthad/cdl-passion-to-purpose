import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import GeneratorTemplate from "../../components/generator-template";
import GenerateAttribution from "../../components/generator-attribution";
import style from "./index.module.scss";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };

    const gameData = this.props.gameData;
    gameData.shufflePassions();
    gameData.shufflePurposes();
  }

  toggleHidden() {
    this.setState({ isHidden: true });
  }

  storeP2P = () => {
    this.props.store.setPurpose(this.render.purpose);
    console.log(this.render.purpose);
  };

  render() {
    const { gameData, nextRoute } = this.props;
    const passion = gameData.passionStore.responses[gameData.chosenPassionIndex];
    const purpose = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex];
    const Child = () => <span className={style.generatedPassion}>{passion}</span>;
    const Parent = () => (
      <div className={style.overflowContainer}>
        <div className={style.animation}>
          <span className={style.generatedPassion}>
            <ul>
              <li>{gameData.passionStore.responses[0]}</li>
              <li>{gameData.passionStore.responses[1]}</li>
              <li>{gameData.passionStore.responses[2]}</li>
              <li>{gameData.passionStore.responses[3]}</li>
            </ul>
          </span>
        </div>
      </div>
    );

    return (
      <GeneratorTemplate>
        <div className={style.generatedQuestion}>
          <span className={style.hmwPreset}>How might we use </span>
          <div className={style.passionContainer}>
            <GenerateAttribution
              className={style.generatedButton}
              //onClick={gameData.incrementPassionIndex}
              onClick={this.toggleHidden.bind(this)}
            />
            {!this.state.isHidden && <Child />}
            {this.state.isHidden && <Parent />}
            <div className={style.hidden}>
              <span className={style.generatedPassion}>{passion}</span>
            </div>
          </div>
          <span className={style.hmwPreset}>to</span>
          <div className={style.purposeContainer}>
            <GenerateAttribution
              className={style.generatedButton}
              onClick={gameData.incrementPurposeIndex}
            />
            <div className={style.hidden}>
              <span className={style.generatedPurpose}>{purpose}?</span>
            </div>
          </div>
        </div>
        <div className="generateButtonContainer" style={{ textAlign: "center" }}>
          <Link className="button" to={nextRoute}>
            Continue with this ➞
          </Link>
        </div>
      </GeneratorTemplate>
    );
  }
}

export default inject("gameData")(observer(Generator));

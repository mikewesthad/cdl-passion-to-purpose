import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import GeneratorTemplate from "../../components/generator-template";
import GenerateAttribution from "../../components/generator-attribution";
import style from "./index.module.scss";
//
class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };
    const gameData = this.props.gameData;
    gameData.shufflePassions();
    gameData.shufflePurposes();
  }

  toggleHiddenPassion() {
    if (this.state.isHidden) {
      this.setState({ isHidden: !this.state.isHidden });
      this.props.gameData.incrementPassionIndex();
    } else {
      this.props.gameData.incrementPassionIndex();
    }
  }

  toggleHiddenPurpose() {
    if (this.state.isHidden) {
      this.setState({ isHidden: !this.state.isHidden });
      this.props.gameData.incrementPurposeIndex();
    } else {
      this.props.gameData.incrementPurposeIndex();
    }
  }

  storeP2P = () => {
    this.props.store.setPurpose(this.render.purpose);
    console.log(this.render.purpose);
  };

  render() {
    const { gameData, nextRoute } = this.props;
    const passion = gameData.passionStore.responses[gameData.chosenPassionIndex];
    const purpose = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex];
    const PassionChild = () => <span className={style.generatedPassion}>{passion}</span>;
    const PassionParent = () => (
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
    const PurposeChild = () => <span className={style.generatedPurpose}>{purpose}</span>;
    const PurposeParent = () => (
      <div className={style.overflowContainer}>
        <div className={style.animation}>
          <span className={style.generatedPurpose}>
            <ul>
              <li>{gameData.getPurposesWithVerb()[0]}</li>
              <li>{gameData.getPurposesWithVerb()[1]}</li>
              <li>{gameData.getPurposesWithVerb()[2]}</li>
              <li>{gameData.getPurposesWithVerb()[3]}</li>
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
              onClick={this.toggleHiddenPassion.bind(this)}
            />
            <span className={style.generatedPassion}>{passion}</span>
          </div>
          <span className={style.hmwPreset}>to</span>
          <div className={style.purposeContainer}>
            <GenerateAttribution
              className={style.generatedButton}
              onClick={this.toggleHiddenPurpose.bind(this)}
            />

            <span className={style.generatedPurpose}>{purpose}?</span>
          </div>
        </div>
        <div className="generateButtonContainer" style={{ textAlign: "center" }}>
          {this.state.isHidden ? null : (
            <Link className="button" to={nextRoute}>
              Continue with this &#8594;
            </Link>
          )}
        </div>
      </GeneratorTemplate>
    );
  }
}

export default inject("gameData")(observer(Generator));

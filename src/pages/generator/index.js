import React from "react";
import { Link } from "react-router-dom"; //unhash when next page is needed
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
    this.state = { passionNum: 0, purposeNum: 0 };
  }

  componentDidMount() {
    const gameData = this.props.gameData;
    gameData.saveToFirebase();
  }

  getNextPassion = () => {
    if (this.state.passionNum < 3) {
      this.setState(prev => {
        return { passionNum: prev.passionNum + 1 };
      });
    } else {
      this.setState(prev => {
        return { passionNum: 0 };
      });
    }
  };

  getNextPurpose = () => {
    if (this.state.purposeNum < 3) {
      this.setState(prev => {
        return { purposeNum: prev.purposeNum + 1 };
      });
    } else {
      this.setState(prev => {
        return { purposeNum: 0 };
      });
    }
  };

  storeP2P = () => {
    this.props.store.setPurpose(this.render.purpose);
    console.log(this.render.purpose);
  };

  render() {
    const { gameData, nextRoute } = this.props;
    const { passionNum } = this.state;
    const { purposeNum } = this.state;
    const passion = gameData.passionStore.responses[passionNum];
    const purpose = gameData.getPurposesWithVerb()[purposeNum];

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
            <GenerateAttribution style={{ display: "inline" }} onClick={this.getNextPurpose} />
            <span className={style.generatedPurpose}>{purpose}?</span>
          </div>
        </div>
        <div className="generateButtonContainer" style={{ textAlign: "center" }}>
          <Link
            className="button"
            to={nextRoute}
            onClick={(gameData.setPurpose(purpose), gameData.setPassion(passion))}
          >
            Continue with this ➞
          </Link>
        </div>
      </GeneratorTemplate>
    );
  }
}

export default inject("gameData")(observer(Generator));

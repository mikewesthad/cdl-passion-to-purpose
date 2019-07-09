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
    this.state = { passionNum: 0, purposeNum: 0 };
  }

  componentDidMount() {
    const gameData = this.props.gameData;
    gameData.saveToFirebase();
  }

  getNextPassion = () => {
    this.setState(prev => {
      return { passionNum: prev.passionNum + 1 };
    });
  };

  getNextPurpose = () => {
    this.setState(prev => {
      return { purposeNum: prev.purposeNum + 1 };
    });
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

    console.log(gameData.passionStore.responses[1]);
    console.log(passionNum);
    console.log(this.render.passionNum);

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

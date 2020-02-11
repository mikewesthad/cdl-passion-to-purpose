import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import style from "./index.module.scss";
import HMWSocialShare from "../../components/social-share/socialshare-hmw";
import AutosizeInput from "react-input-autosize";
import Confetti from "react-confetti";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    const gameData = this.props.gameData;
    this.state = { combinationNumber: 0 };
  }

  //gameData.saveToFirebase();

  getNextCombination = () => {
    this.setState(prev => {
      return { combinationNumber: prev.combinationNumber + 1 };
    });
  };

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  onPassionChange = event => {
    this.props.gameData.editPassion(event.target.value);
  };

  onPurposeChange = event => {
    this.props.gameData.editPurpose(event.target.value);
  };

  render() {
    const { gameData, nextRoute } = this.props;
    return (
      <Container>
        {/*/<h1 className="title">Next Steps</h1>*/}
        <Confetti />

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>How might we use </span>
          <span className={style.generatedPassion}>
            <AutosizeInput
              className={style.passionInputWrapper}
              inputClassName={style.passionInput}
              type="text"
              name="title"
              value={gameData.passionStore.responses[gameData.chosenPassionIndex]}
              onChange={this.onPassionChange}
            />
          </span>
          <span className={style.bolded}> to </span>
          <span className={style.generatedPurpose}>
            {gameData.getPurposeVerb()[gameData.chosenPurposeIndex]}
            <AutosizeInput
              className={style.purposeInputWrapper}
              inputClassName={style.purposeInput}
              type="text"
              name="title"
              value={gameData.purposeStore.responses[gameData.chosenPurposeIndex]}
              onChange={this.onPurposeChange}
            />
            ?
          </span>
        </div>

        <div className="text-center">
          <HMWSocialShare passion={gameData.purposeStore.responses[gameData.chosenPurposeIndex]} />
        </div>

        <div className="description">
          Congratulations, you have transformed your passion and purpose into a “How Might We”
          question! On the next page you'll see an overview of everything you've done so far.
        </div>

        <form />

        <div className="generateButtonContainer" style={{ textAlign: "center" }}>
          <Link className="button" to={nextRoute}>
            Continue &#8594;
          </Link>
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(Generator));

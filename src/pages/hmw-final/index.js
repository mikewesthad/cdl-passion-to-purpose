import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import style from "./index.module.scss";
import HMWSocialShare from "../../components/social-share/socialshare-hmw";
import AutosizeInput from "react-input-autosize";
import Confetti from "react-confetti";
import DownloadButton from "../../components/download";

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
        <Confetti
          width={1000}
          height={780}
          numberOfPieces={40}
          colors={["#2eb4ff", "ff9a21", "#97cf3e", "#d43ccd", "#f5f5f5"]}
          recycle={false}
        />

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
              autoComplete="off"
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
              autoComplete="off"
            />
            ?
          </span>
        </div>

        <div className="text-center">
          <DownloadButton />
          <HMWSocialShare passion={gameData.purposeStore.responses[gameData.chosenPurposeIndex]} />
        </div>

        {/*<div className="description">
          Congratulations, you have transformed your passion and purpose into a “How Might We”
          question! On the next page you'll see an overview of everything you've done so far.
    </div>*/}

        <form />
      </Container>
    );
  }
}

export default inject("gameData")(observer(Generator));

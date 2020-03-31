import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import style from "./index.module.scss";
import HMWSocialShare from "../../components/social-share/socialshare-hmw";
import AutosizeInput from "react-input-autosize";
import Confetti from "react-confetti";
import DownloadButton from "../../components/download";
import EditButton from "../../components/edit-button";
import TextareaAutosize from "react-autosize-textarea";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.textField = React.createRef();
    this.textFieldTwo = React.createRef();
    var currentTextField = 1;
    const gameData = this.props.gameData;
    this.state = { combinationNumber: 0 };
  }

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

  editFlow = () => {
    if (this.currentTextField == 2) {
      this.textFieldTwo.current.focus();
      this.textFieldTwo.current.select();
      this.currentTextField = 1;
    } else {
      this.textField.current.focus();
      this.textField.current.select();
      this.currentTextField = 2;
    }
  };

  // PDF download

  render() {
    const { gameData, nextRoute } = this.props;
    return (
      <Container>
        <Confetti
          confettiSource={{ x: 0, y: 0, w: 5, h: 0 }}
          numberOfPieces={3500}
          initialVelocityX={100}
          initialVelocityY={-100}
          colors={["#2eb4ff", "ff9a21", "#97cf3e", "#d43ccd", "#f5f5f5"]}
          recycle={false}
          tweenDuration={20000}
        />
        <Confetti
          confettiSource={{ x: window.innerWidth, y: 0, w: 5, h: 0 }}
          numberOfPieces={3500}
          initialVelocityX={-100}
          initialVelocityY={-100}
          colors={["#2eb4ff", "ff9a21", "#97cf3e", "#d43ccd", "#f5f5f5"]}
          recycle={false}
          tweenDuration={20000}
        />

        <div className={style.generatedQuestion}>
          <div className={style.fadeGroupOne}>
            <span className={style.bolded}>How might we use </span>
          </div>
          <div className={style.fadeGroupTwo}>
            <span className={style.generatedPassion}>
              <TextareaAutosize
                className={style.passionInputWrapper}
                inputClassName={style.passionInput}
                spellCheck="false"
                type="text"
                name="title"
                value={gameData.passionStore.responses[gameData.chosenPassionIndex]}
                onChange={this.onPassionChange}
                autoComplete="off"
                ref={this.textField}
              />
            </span>
          </div>
          <div className={style.fadeGroupThree}>
            <span className={style.bolded}> to </span>
          </div>
          <div className={style.fadeGroupFour}>
            <span className={style.generatedPurpose}>
              {gameData.getPurposeVerb()[gameData.chosenPurposeIndex] + " "}
              <TextareaAutosize
                rows={1}
                className={style.purposeInputWrapper}
                inputClassName={style.purposeInput}
                type="text"
                spellCheck="false"
                name="title"
                value={gameData.purposeStore.responses[gameData.chosenPurposeIndex]}
                onChange={this.onPurposeChange}
                autoComplete="off"
                ref={this.textFieldTwo}
              />
              ?
            </span>
          </div>
        </div>

        <div className={style.fadeGroupFive}>
          <div className="text-center">
            <EditButton onClick={() => this.editFlow()} />
            <DownloadButton />
            <HMWSocialShare
              passion={gameData.purposeStore.responses[gameData.chosenPurposeIndex]}
            />
          </div>

          <div className="description">
            Congratulations, you have transformed your passion and purpose into a “How Might We”
            question! Check out Convergence Design Lab for some reason!
          </div>

          {/*<div className="description">
          Congratulations, you have transformed your passion and purpose into a “How Might We”
          question! On the next page you'll see an overview of everything you've done so far.
    </div>*/}

          <form />
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(Generator));

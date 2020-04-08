import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import style from "./index.module.scss";
import HMWSocialShare from "../../components/social-share/socialshare-hmw";
import AutosizeInput from "react-input-autosize";
import Confetti from "react-confetti/dist/react-confetti";
import DownloadButton from "../../components/download";
import EditButton from "../../components/edit-button";
import TextareaAutosize from "react-autosize-textarea";
import { toJS } from "mobx";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.textField = React.createRef();
    this.textFieldTwo = React.createRef();
    var currentTextField = 1;
    const gameData = this.props.gameData;
    this.state = { combinationNumber: 0 };
    var purposeText;
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
    //  this.textFieldTwo.current.value = this.purposeText + "?";

    this.props.gameData.editPurpose(event.target.value);
    // this.textFieldTwo.current.value =
    //   this.props.gameData.purposeStore.responses[this.props.gameData.chosenPurposeIndex] + "?";
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

  addQuestionMark = () => {
    //this.purposeText = this.purposeText + "?";
    console.log(this.textFieldTwo.current.value);
    console.log(this.textFieldTwo.current.value.includes("?"));
    if (!this.textFieldTwo.current.value.includes("?")) {
      this.textFieldTwo.current.value = this.purposeText + "?";
    }
  };

  // PDF download
  componentDidMount() {
    console.log("Component did mount");
    console.log("purpose text " + this.props.purposeText);
    //this.addQuestionMark();

    if (!this.textFieldTwo.current.value.includes("?")) {
      this.textFieldTwo.current.value = this.purposeText + "?";
      console.log("Trying to add ?");
    }
  }

  render() {
    const { gameData, nextRoute } = this.props;
    this.purposeText = gameData.purposeStore.responses[this.props.gameData.chosenPurposeIndex];
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
                style={{ resize: "none", width: "100%" }}
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
                style={{ resize: "none", width: "100%" }}
                type="text"
                spellCheck="false"
                name="title"
                value={this.purposeText}
                onChange={this.onPurposeChange}
                onBlur={this.addQuestionMark}
                ref={this.textFieldTwo}
              />
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
            question! Check out Convergence Design Lab for other civic minded projects!
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

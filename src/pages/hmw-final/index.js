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
    var purposeText;
    var isTeacher;
    this.state = {
      combinationNumber: 0,
      purposeText: gameData.purposeStore.responses[this.props.gameData.chosenPurposeIndex] + "?",
      isTeacher: false
    };
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
    const value = event.target.value;
    const valueNoQuest = value.endsWith("?") ? value.slice(0, value.length - 1) : value;
    this.setState({ purposeText: value });

    this.props.gameData.editPurpose(valueNoQuest);
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

  addQuestionMark = event => {
    const value = event.target.value;
    const valueWithQuest = value.endsWith("?") || value == "" ? value : value + "?";
    this.setState({ purposeText: valueWithQuest });
    console.log("Value with Quest: " + valueWithQuest);
  };

  componentDidMount() {
    var searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.get("role") === "teacher");
    console.log("url?: " + window.location.search);
    this.setState({ isTeacher: searchParams.get("role") === "teacher" });
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
                placeholder="Insert Passion Here"
                className={style.passionInputWrapper}
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
                placeholder="Insert Purpose Here"
                rows={1}
                className={style.purposeInputWrapper}
                style={{ resize: "none", width: "100%" }}
                type="text"
                spellCheck="false"
                name="title"
                value={this.state.purposeText}
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
            question! <br />
            Check out{" "}
            <a
              href="https://convergencedesignlab.org"
              className={style.logoLink}
              onClick={event => {
                event.preventDefault();
                window.open("https://convergencedesignlab.org");
              }}
            >
              Convergence Design Lab{" "}
            </a>{" "}
            for other civic minded projects!
          </div>
          <div display={this.state.isTeacher} className="description">
            Teachers, please fill out
            <a
              href="https://www.surveymonkey.com/r/cdl-p2p-survey"
              className={style.logoLink}
              onClick={event => {
                event.preventDefault();
                window.open("https://www.surveymonkey.com/r/cdl-p2p-survey");
              }}
            >
              {" "}
              this short feedback survey.
            </a>
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

import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import style from "./index.module.scss";
import HMWSocialShare from "../../components/social-share/socialshare-hmw";
import AutosizeInput from "react-input-autosize";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    const gameData = this.props.gameData;
    this.state = { combinationNumber: 0 };

    gameData.saveToFirebase();
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
    console.log(event.target.value);
  };

  onPurposeChange = event => {
    this.props.gameData.editPurpose(event.target.value);
    console.log(event.target.value);
  };

  render() {
    const { gameData, nextRoute } = this.props;
    return (
      <Container>
        {/*/<h1 className="title">Next Steps</h1>*/}

        <div className={style.generatedQuestion}>
          <span className={style.bolded}>How might we use </span>
          <span className={style.generatedPassion}>
            {gameData.passionStore.responses[gameData.chosenPassionIndex]}
          </span>
          <span className={style.bolded}> to </span>
          <span className={style.generatedPurpose}>
            {gameData.getPurposeVerb()[gameData.chosenPurposeIndex]}{" "}
            {gameData.purposeStore.responses[gameData.chosenPurposeIndex]}?
          </span>
        </div>

        <div className="description">
          Congratulations, you have transformed your passion and purpose into a “How Might We”
          question. The next step in the process is to share it out and get feedback!
        </div>

        <div className="text-center">
          <HMWSocialShare passion={gameData.purposeStore.responses[gameData.chosenPurposeIndex]} />
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(Generator));

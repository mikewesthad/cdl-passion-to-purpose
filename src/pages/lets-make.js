import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import style from "./make-generator/index.module.scss";

class LetsMake extends React.Component {
  componentDidMount() {
    const gameData = this.props.gameData;
    gameData.saveToFirebase();
  }

  render() {
    const { gameData } = this.props;

    const passion = gameData.passionStore.responses[gameData.chosenPassionIndex];
    const purpose = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex];
    const medium = gameData.medium;
    const impact = gameData.impact;
    return (
      <Container>
        <div className={style.generatedQuestion}>
          <span className={style.bolded}>How might we use </span>
          <span className={style.generatedPassion}>{passion}</span>
          <span className={style.bolded}> to </span>
          <span className={style.generatedPurpose}>{purpose}?</span>
        </div>
        <div className={style.generatedQuestion}>
          <span className={style.bolded}>Let's make a </span>
          <span className={style.generatedPassion}>{medium}</span>
          <span className={style.bolded}> to </span>
          <span className={style.generatedPurpose}>{impact}.</span>
        </div>

        <div className="text-center">
          <Link className="button" to={this.props.nextRoute}>
            Continue ➞
          </Link>
        </div>
      </Container>
    );
  }
}
export default inject("gameData")(observer(LetsMake));

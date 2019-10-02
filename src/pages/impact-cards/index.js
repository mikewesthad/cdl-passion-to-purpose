import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import Container from "../../components/medium-cards-template";
import style from "./index.module.scss";
//import GenerateAttribution from "../../components/generator-attribution";

class ImpactCards extends React.Component {
  render() {
    const { gameData, nextRoute } = this.props;
    const passion = gameData.passionStore.responses[gameData.chosenPassionIndex];
    const purpose = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex];
    const medium = gameData.medium;
    const impact = gameData.impact;
    return (
      <Container>
        <h1 className="title">Explore Impact</h1>
        <div className="description">
          Let's make <div className={style.lowercase}>{medium}</div> to{" "}
          <div className={style.lowercase}>{impact}</div>! Do you think this medium pairs well with
          this impact?
        </div>

        <span>How might we use </span>
        <span>{passion} </span>
        <span>to </span>
        <span>{purpose}?</span>

        <div className={style.cardsContainer}>
          <div className={style.childCard}>
            <div className={style.cardText}>{medium}</div>
          </div>
          <div className={style.exampleCard}>
            <div className={style.cardText}>
              {impact}
              <div className={style.miniCardText}>{gameData.impactData[impact][0].definition}</div>
            </div>
          </div>
        </div>

        <div className="generateButtonContainer" style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link className="button" to={nextRoute}>
            Continue ➞
          </Link>
        </div>
      </Container>
    );
  }
}
export default inject("gameData")(observer(ImpactCards));

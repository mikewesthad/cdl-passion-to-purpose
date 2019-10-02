import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/nav/button/";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import style from "./index.module.scss";
//import GenerateAttribution from "../../components/generator-attribution";

class MediaCards extends React.Component {
  render() {
    const { gameData, nextRoute, prevRouteMedia } = this.props;
    const passion = gameData.passionStore.responses[gameData.chosenPassionIndex];
    const purpose = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex];
    const medium = gameData.medium;
    return (
      <Container>
        <h1 className="title">
          Let's make <div className={style.lowercase}>{medium}!</div>
        </h1>
        <div className={style.description}>
          Here's an example of <div className={style.lowercase}>{medium}</div> project! Click the
          link to learn more about it. If a project like this interests you, continue. If not, go
          back a page and try looking at examples from other media categories!
        </div>
        <div className={style.generatedQuestion}>
          <span>How might we use </span>
          <span className={style.passion}>{passion} </span>
          <span>to </span>
          <span className={style.purpose}>{purpose}?</span>
        </div>
        <div className={style.cardsContainer}>
          <a
            href={gameData.mediaExampleData[medium][0].link}
            className={style.logoLink}
            onClick={event => {
              event.preventDefault();
              window.open(gameData.mediaExampleData[medium][0].link);
            }}
          >
            <div className={style.childCard}>
              <div className={style.cardText}>
                {gameData.mediaExampleData[medium][0].exampleName}
                <div className={style.miniCardText}>Click here to view the project</div>
              </div>
            </div>
          </a>
          <div className={style.exampleCard}>
            <img src={gameData.mediaExampleData[medium][0].image} />
          </div>
          <a
            href={gameData.mediaExampleData[medium][0].resourceLink}
            className={style.logoLink}
            onClick={event => {
              event.preventDefault();
              window.open(gameData.mediaExampleData[medium][0].resourceLink);
            }}
          >
            <div className={style.descriptionCard}>
              <div className={style.descriptionText}>Click here to view resources</div>
            </div>
          </a>
        </div>

        <div className="generateButtonContainer" style={{ textAlign: "center", marginTop: "2rem" }}>
          <div className={style.button}>
            <Link className="button" to={prevRouteMedia}>
              ⭠ Go Back
            </Link>
          </div>

          <Link className="button" to={nextRoute}>
            Continue ⭢
          </Link>
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(MediaCards));

import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../../components/container";
import style from "./index.module.scss";
import GenerateAttribution from "../../components/generator-attribution";

class MediaCards extends React.Component {
  render() {
    const { gameData, nextRoute } = this.props;
    const medium = gameData.medium;
    return (
      <Container>
        <h1 className="title">
          Let's make <div className={style.lowercase}>{medium}!</div>
        </h1>
        <div className="description">
          Here's an example of <div className={style.lowercase}>{medium}</div> project! Click the
          link to learn more about it. If a project like this interests you, continue. If not, go
          back a page and try looking at examples from other media categories!
        </div>

        <div className={style.cardsContainer}>
          <div className={style.childCard}>
            <div className={style.cardText}>{gameData.mediaExampleData[medium][0].exampleName}</div>
          </div>
          <div className={style.exampleCard}>
            <img src={gameData.mediaExampleData[medium][0].image} />
          </div>
          <a
            href={gameData.mediaExampleData[medium][0].link}
            className={style.logoLink}
            onClick={event => {
              event.preventDefault();
              window.open(gameData.mediaExampleData[medium][0].link);
            }}
          >
            <div className={style.descriptionCard}>
              <div className={style.descriptionText}>Link to project</div>
            </div>
          </a>
          <a
            href={gameData.mediaExampleData[medium][0].resourceLink}
            className={style.logoLink}
            onClick={event => {
              event.preventDefault();
              window.open(gameData.mediaExampleData[medium][0].resourceLink);
            }}
          >
            <div className={style.descriptionCard}>
              <div className={style.descriptionText}>Link to resources</div>
            </div>
          </a>
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

export default inject("gameData")(observer(MediaCards));

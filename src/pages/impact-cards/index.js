import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import Container from "../../components/medium-cards-template";
import style from "./index.module.scss";
import GenerateAttribution from "../../components/generator-attribution";

class ImpactCards extends React.Component {
  render() {
    const { gameData, nextRoute } = this.props;
    const medium = gameData.medium;
    const impact = gameData.impact;
    return (
      <Container>
        <h1 className="title">
          Let's make a <div className={style.lowercase}>{medium}</div> to{" "}
          <div className={style.lowercase}>{impact}</div>!
        </h1>
        <div className="description">
          Cycle through the <div className={style.lowercase}>{impact}</div> category to view various
          types of projects done similarly in your community!
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
        </div>

        <div className="generateButtonContainer" style={{ textAlign: "center", marginTop: "2rem" }}>
          <GenerateAttribution
            className={style.generatedButton}
            //onClick={this.toggleHiddenPassion.bind(this)}
          />
          <Link className="button" to={nextRoute}>
            Continue ➞
          </Link>
        </div>
      </Container>
    );
  }
}
export default inject("gameData")(observer(ImpactCards));

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
          Let's make a {medium} to {impact}!
        </h1>
        <div className="description">
          Cycle through the {impact} category to view various types of projects done similarly in
          your community!
        </div>

        <div className={style.cardsContainer}>
          <div className={style.childCard}>something</div>
          <div className={style.exampleCard}>Picture in my background-image</div>
          <div className={style.descriptionCard}>something</div>
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

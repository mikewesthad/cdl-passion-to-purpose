import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import CardsContainer from "../../components/medium-cards-template";
import style from "./index.module.scss";
import GenerateAttribution from "../../components/generator-attribution";

class MediumCards extends React.Component {
  render() {
    const { gameData } = this.props;
    const medium = gameData.medium;
    return (
      <CardsContainer>
        <div className={style.generatedPrompt}>
          <span className={style.generatedPrompt}>Let's make a </span>
          <span className={style.mediaPrompt}>{medium}!</span>
        </div>
        <div className={style.cardsContainer}>
          <div className={style.exampleCard}>
            <div className={style.tags}>Tags</div>
            <div className={style.mediaTitle}>{medium}</div>
            <div className={style.link}>Link</div>
          </div>
          <div className={style.affordanceCard}>
            <div className={style.affordanceTitle}>Example Project</div>
          </div>
          <div className={style.descriptionCard}>
            <div className={style.projectDescription}>Project Description</div>
          </div>
        </div>
        <div className="text-center">
          <GenerateAttribution
            className={style.generatedButton}
            //onClick={this.toggleHiddenPassion.bind(this)}
          />
          <Link className="button" to={this.props.nextRoute}>
            Continue ➞
          </Link>
        </div>
      </CardsContainer>
    );
  }
}
export default inject("gameData")(observer(MediumCards));

import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/container";
import style from "./index.module.scss";

export default function MediumCards(props) {
  return (
    <Container>
      <div className={style.generatedPrompt}>
        <span className={style.generatedPrompt}>Let's make a </span>
        <span className={style.selectedMedium}>medium </span>
        <span className={style.generatedPrompt}>to </span>
        <span className={style.selectedAffordance}> affordance.</span>
      </div>
      <div className={style.cardsContainer}>
        <div className={style.exampleCard}>
          <div className={style.tags}>Tags</div>
          <div className={style.mediaTitle}>Medium</div>
          <div className={style.link}>Link</div>
          <div className={style.credits}>Photo Courtesy</div>
        </div>
        <div className={style.affordanceCard}>
          <div className={style.affordanceTitle}>Affordance</div>
        </div>
        <div className={style.descriptionCard}>
          <div className={style.projectDescription}>Project Description</div>
        </div>
      </div>
      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Continue ➞
        </Link>
      </div>
    </Container>
  );
}

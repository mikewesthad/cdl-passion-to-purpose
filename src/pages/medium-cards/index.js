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
      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Continue ➞
        </Link>
      </div>
    </Container>
  );
}

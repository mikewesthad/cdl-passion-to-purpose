import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import style from "./make-generator/index.module.scss";

export default function LetsMake(props) {
  return (
    <Container>
      <div className={style.generatedQuestion}>
        <span className={style.bolded}>How might we use </span>
        <span className={style.generatedPassion}>passion</span>
        <span className={style.bolded}> to </span>
        <span className={style.generatedPurpose}>purpose?</span>
      </div>
      <div className={style.generatedQuestion}>
        <span className={style.bolded}>Let's make a </span>
        <span className={style.generatedPassion}>medium</span>
        <span className={style.bolded}> to </span>
        <span className={style.generatedPurpose}>impact.</span>
      </div>

      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Continue ➞
        </Link>
      </div>
    </Container>
  );
}

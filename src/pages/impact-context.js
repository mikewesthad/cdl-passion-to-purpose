import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function ImpactContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">What impact do you want to make?</h2>
        <div className="description">
          <p>
            Which affordance might best represent your goals in answering your How Might We
            question?
          </p>
        </div>
      </div>
      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Let's explore! ➞
        </Link>
      </div>
    </Container>
  );
}

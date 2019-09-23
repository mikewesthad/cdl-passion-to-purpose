import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function NextStepsContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Next Steps</h2>
        <div className="description">
          <p>Now we're going to work towards answering your How Might We Question</p>
          <p>Let's explore possible mediums to jumpstart your ideation process!</p>
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

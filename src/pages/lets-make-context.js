import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function LMContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Let's Make...</h2>
        <div className="description">
          <p>Let's combine your medium and action!</p>
          <p>Some more text here</p>
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

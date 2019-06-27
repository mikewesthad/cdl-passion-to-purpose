import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function PassionContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Passion</h2>
        <div className="description">
          <p>First, we're going to ask you about your passions.</p>
          <p>Answer honestly, and only provide one answer to each question.</p>
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

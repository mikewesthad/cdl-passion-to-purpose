import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function PassionContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Quick tip!</h2>
        <div className="description">
          <p>Don't do this</p>
          <p>Do this</p>
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

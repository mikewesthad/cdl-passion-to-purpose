import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function MediaDisclaimer(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Media Example</h2>
        <div className="description">
          <p>Artists and designers draw inspiration from example projects.</p>
        </div>
      </div>
      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Continue &#8594;
        </Link>
      </div>
    </Container>
  );
}

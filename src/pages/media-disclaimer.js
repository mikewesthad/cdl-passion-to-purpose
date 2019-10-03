import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function MediaDisclaimer(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Media Example</h2>
        <div className="description">
          <p>
            Artists and designers often draw inspiration from existing projects that inspire them.
            On the next page, we’ll show you an example that may help spark some new ideas for your
            project.
          </p>
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

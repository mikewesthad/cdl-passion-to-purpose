import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function HMWContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Generating a "How Might We" question</h2>
        <div className="description">
          <p>
            Let’s combine your responses and turn them into a “How Might We” question. Designers use
            “How Might We” questions as a way to define a project idea by brainstorming new
            opportunities for creativity and design. Click to see the different combinations and
            choose your favorite.
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

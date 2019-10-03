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
            Let’s combine your responses and turn them into a “How Might We” question. Designers
            often frame ideas as “How Might We” questions as a way to spark a series of new ideas
            and jumpstart brainstorming.
          </p>
          <p>
            On the next page, click the shuffle buttons to generate new “How Might We” questions and
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

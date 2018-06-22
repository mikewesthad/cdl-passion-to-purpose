import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function Home(props) {
  return (
    <Container>
      <h1 className="title">Passion to Purpose</h1>
      <div className="description">
        <p>How can you turn your passion into a purpose?</p>
        <p>Answer a couple simple questions to generate design questions to inspire yourself.</p>
      </div>
      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Let's Go ➞
        </Link>
      </div>
      <div className="attribution">
        Built by{" "}
        <a className="link" href="https://convergencedesignlab.org">
          Convergence Design Lab
        </a>
      </div>
    </Container>
  );
}

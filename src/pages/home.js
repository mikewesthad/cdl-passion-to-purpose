import React from "react";
import { Link } from "react-router-dom";
import gameData from "../store";
import Container from "../components/container";
import Logo from "../components/logo";

const reset = () => gameData.reset();

export default function Home(props) {
  return (
    <Container>
      <h1 className="title">Passion to Purpose</h1>
      <div className="description">
        <p>How can you turn your passion into a purpose?</p>
        <p>Answer a couple simple questions to generate design questions to inspire yourself.</p>
      </div>
      <div className="text-center">
        <Link className="button" onClick={reset} to={props.nextRoute}>
          Let's Go ➞
        </Link>
      </div>
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <a className="link" href="https://convergencedesignlab.org/">
          <Logo />
        </a>
      </div>
    </Container>
  );
}

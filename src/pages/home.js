import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import Attribution from "../components/attribution";
import Timeline from "../components/timeline";

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
          Let's Imagine &#8594;
        </Link>
      </div>
      <Attribution style={{ marginTop: "2rem", textAlign: "center" }} />
      <Timeline testing={{ width: "0%" }} />
    </Container>
  );
}

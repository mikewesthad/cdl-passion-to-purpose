import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import Attribution from "../components/attribution";

export default function Home(props) {
  return (
    <Container>
      <h1 className="title">Imagine</h1>
      <div className="description">
        <p>How can you make something meaningful?</p>
        <p>Go through the various steps of the design process.</p>
      </div>
      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Let's Imagine ➞
        </Link>
      </div>
      <Attribution style={{ marginTop: "2rem", textAlign: "center" }} />
    </Container>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function LetsMake(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Let's Make Page</h2>
        <div className="description">
          <p>There will be stuff here!</p>
          <p>Your HMW and LM will go here!</p>
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

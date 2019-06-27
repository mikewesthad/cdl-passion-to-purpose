import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function HMWContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">How might we...?</h2>
        <div className="description">
          <p>Now, we're going to combine your answers</p>
          <p>Click to see the different combinations and choose your favorite!</p>
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

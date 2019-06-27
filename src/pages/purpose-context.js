import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function PurposeContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Purpose</h2>
        <div className="description">
          <p>Now we're going to ask you think outwardly.</p>
          <p>Think about the change you want to see in the world.</p>
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

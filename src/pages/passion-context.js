import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function PassionContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Passion</h2>
        <div className="description">
          <p>What do you geek out about? What do you do in your free time?</p>
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

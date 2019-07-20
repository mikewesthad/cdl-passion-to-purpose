import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function PurposeContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">What is your purpose?</h2>
        <div className="description">
          <p>What issues do you care about?</p>
          <p>Where do you want to make an impact?</p>
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

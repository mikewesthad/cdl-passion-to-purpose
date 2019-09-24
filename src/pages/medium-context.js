import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function MediumContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">Explore Potential Mediums</h2>
        <div className="description">
          <p>What medium might best serve you as a way to answer your How Might We question?</p>
        </div>
      </div>
      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Let's explore! ➞
        </Link>
      </div>
    </Container>
  );
}

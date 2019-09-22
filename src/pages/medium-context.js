import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function MediumContext(props) {
    return (
      <Container>
        <div className="context-container" to={props.nextRoute}>
          <h2 className="title">Explore Potential Mediums</h2>
          <div className="description">
            <p>How might you refine your question to make it more specific and inspiring?</p>
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
  
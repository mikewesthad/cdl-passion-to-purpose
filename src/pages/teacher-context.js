import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

export default function TeacherContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <h2 className="title">YOU'RE A TEACHER</h2>
        <div className="description">
          <p>Info for teachers will go here and it will be really important and valuable</p>
          <p>Trust me, it'll be good</p>
        </div>
      </div>
      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Continue &#8594;
        </Link>
      </div>
    </Container>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Generator(props) {
  return (
    <div>
      <div>Generator</div>
      <div>
        <Link to={props.backRoute}>Back</Link>
        <Link to={props.backRoute}>Start Over</Link>
      </div>
    </div>
  );
}

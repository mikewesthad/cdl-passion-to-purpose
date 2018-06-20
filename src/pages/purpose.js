import React from "react";
import { Link } from "react-router-dom";

export default function Purpose(props) {
  return (
    <div>
      <div>Purpose</div>
      <div>
        <Link to={props.nextRoute}>Next</Link>
        <Link to={props.backRoute}>Back</Link>
      </div>
    </div>
  );
}

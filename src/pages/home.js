import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <div>Home</div>
      <div>
        <Link to={props.nextRoute}>Next</Link>
      </div>
    </div>
  );
}

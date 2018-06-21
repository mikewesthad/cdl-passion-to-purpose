import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <h1>Passion to Purpose</h1>
      <div>
        <p>How can you turn your passion into a purpose?</p>
        <p>Answer a couple simple questions to generate design questions to inspire yourself.</p>
      </div>
      <div>
        <Link to={props.nextRoute}>Let's Go ➞</Link>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import ccImage from "../images/cc-by-nc-sa.svg";

// React doen't support xml namspaces, so workaround this with innerhtml:
const attributionTitle = `
<span 
  xmlns:dct="http://purl.org/dc/terms/"
  href="http://purl.org/dc/dcmitype/InteractiveResource"
  property="dct:title"
  rel="dct:type"
>Passion to Purpose</span>
`;
const attributionUrl = `
<a
  xmlns:cc="http://creativecommons.org/ns#"
  href="https://www.convergencedesignlab.org/"
  property="cc:attributionName"
  rel="cc:attributionURL"
>Convergence Design Lab</a>
`;

export default function Home(props) {
  return (
    <Container>
      <h1 className="title">Passion to Purpose</h1>
      <div className="description">
        <p>How can you turn your passion into a purpose?</p>
        <p>Answer a couple simple questions to generate design questions to inspire yourself.</p>
      </div>
      <div className="text-center">
        <Link className="button" to={props.nextRoute}>
          Let's Go ➞
        </Link>
      </div>
      <div className="attribution">
        <div>
          <a
            className="display-block text-center"
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            <img
              style={{ marginBottom: "0.25rem" }}
              width="80"
              alt="Creative Commons License"
              src={ccImage}
            />
          </a>
          <span dangerouslySetInnerHTML={{ __html: attributionTitle }} /> by{" "}
          <span dangerouslySetInnerHTML={{ __html: attributionUrl }} /> at Columbia College Chicago
          is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0
          International License (
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            more info
          </a>).
        </div>
      </div>
    </Container>
  );
}

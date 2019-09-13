import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import styled, { keyframes } from "styled-components";
import { bounce, merge, fadeInDown, fadeOutDown } from "react-animations";
const fadeInOut = merge(fadeInDown, fadeOutDown);
const bounceAnimation = keyframes`${fadeInOut}`;

const BouncyDiv = styled.div`
  animation: 2s linear infinite ${bounceAnimation};
`;

export default function HMWContext(props) {
  return (
    <Container>
      <div className="context-container" to={props.nextRoute}>
        <BouncyDiv>
          <h2 className="title">How might we...?</h2>
        </BouncyDiv>
        <div className="description">
          <p>Let's combine your responses!</p>
          <p>Click to see the different combinations and choose your favorite.</p>
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

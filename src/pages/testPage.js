import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import { TimelineLite } from "gsap/all";

class testPage extends React.Component {
  constructor(props) {
    super(props);

    this.shuffleTl = new TimelineLite();
    this.testRef = React.createRef();
  }

  componentDidMount() {
    this.shuffleTl.to(this.testRef.current, 1, { x: 100 });
  }

  render() {
    return (
      <div>
        <h2 ref={this.testRef}>What is your passion?</h2>
      </div>
    );
  }
}

export default testPage;

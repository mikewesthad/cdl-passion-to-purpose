import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import MediumPromptTemplate from "../components/medium-prompt-template";
//import { reaction } from "mobx";

class Medium extends React.Component {
  render() {
    const { gameData } = this.props;

    return (
      <MediumPromptTemplate
        {...this.props}
        store={gameData}
        title={<React.Fragment>Explore media</React.Fragment>}
        description={
          <React.Fragment>
            <p>Okay, roll up your sleeves and get ready for an adventure.</p>
            <p>What might you like to make? Don’t worry we can change this later!</p>
          </React.Fragment>
        }
        nextButton={
          <div className="text-center">
            <Link className="button" to={this.props.nextRoute}>
              Continue ➞
            </Link>
          </div>
        }
      />
    );
  }
}

export default inject("gameData")(observer(Medium));

import React from "react";
import { observer, inject } from "mobx-react";
import PromptTemplate from "../components/prompt-template";
//import { reaction } from "mobx";

class Action extends React.Component {
  render() {
    const { gameData } = this.props;

    return (
      <PromptTemplate
        {...this.props}
        store={gameData.actionStore}
        title={
          <React.Fragment>
            What <span className="title-emphasis">action</span> will you take?
          </React.Fragment>
        }
        description={
          <React.Fragment>
            <p>How should you answer your How Might We?</p>
            <p>What do you want to do?</p>
          </React.Fragment>
        }
        description2={
          <React.Fragment>
            <p>
              Raise Awareness
              <br />
              Change Behavior
              <br />
              Connect People to Opportunities
              <br />
              Make a Task Easier/More Accessible
              <br />
              Change Policies/Laws
              <br />
              Change Perception
              <br />
              Teach a Skill/Concept
              <br />
              Raise Money/Resources
            </p>
          </React.Fragment>
        }
        stepNumber="4"
      />
    );
  }
}

export default inject("gameData")(observer(Action));

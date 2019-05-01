import React from "react";
import { observer, inject } from "mobx-react";
import ActionPromptTemplate from "../components/action-prompt-template";
//import { reaction } from "mobx";

class Action extends React.Component {
  render() {
    const { gameData } = this.props;

    return (
      <ActionPromptTemplate
        {...this.props}
        store={gameData}
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
            <div>
              <ul class="columns" data-columns="2">
                <li> Raise Awareness</li>
                <li> Change Behavior</li>
                <li> Connect People to Opportunities</li>
                <li>Make a Task Easier</li>
                <li>Change Policies</li>
                <li> Change Perception</li>
                <li>Teach a Skill</li>
                <li>Raise Money </li>
              </ul>
            </div>
          </React.Fragment>
        }
        medium1={
          <React.Fragment>
            <p>I want to...</p>
          </React.Fragment>
        }
        stepNumber="4"
      />
    );
  }
}

export default inject("gameData")(observer(Action));

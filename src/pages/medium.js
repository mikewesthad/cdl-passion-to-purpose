import React from "react";
import { observer, inject } from "mobx-react";
import MediumPromptTemplate from "../components/medium-prompt-template";
//import { reaction } from "mobx";

class Medium extends React.Component {
  render() {
    const { gameData } = this.props;

    return (
      <MediumPromptTemplate
        {...this.props}
        store={gameData}
        title={
          <React.Fragment>
            What will you <span className="title-emphasis">make</span>?
          </React.Fragment>
        }
        description={
          <React.Fragment>
            <p>What medium best serves your action?</p>
            <p>Examples:</p>
          </React.Fragment>
        }
      />
    );
  }
}

export default inject("gameData")(observer(Medium));

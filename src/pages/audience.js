import React from "react";
import { observer, inject } from "mobx-react";
import PromptTemplate from "../components/prompt-template";
import { reaction } from "mobx";

class Action extends React.Component {
  render() {
    const { gameData } = this.props;

    return (
      <PromptTemplate
        {...this.props}
        store={gameData.actionStore}
        title={
          <React.Fragment>
            Who is the intended <span className="title-emphasis">audience</span> for this project?
          </React.Fragment>
        }
        description={
          <React.Fragment>
            <p>Your audience will help?</p>
            <p>Type in your choice below?</p>
          </React.Fragment>
        }
        stepNumber="5"
      />
    );
  }
}

export default inject("gameData")(observer(Action));

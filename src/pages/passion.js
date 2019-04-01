import React from "react";
import { observer, inject } from "mobx-react";
import PromptTemplate from "../components/prompt-template";

class Passion extends React.Component {
  render() {
    const { gameData } = this.props;

    return (
      <PromptTemplate
        {...this.props}
        store={gameData.passionStore}
        title={
          <React.Fragment>
            What is your <span className="title-emphasis">passion</span>?
          </React.Fragment>
        }
        description={
          <React.Fragment>
            <p>What do you geek out about? What do you do in your free time?</p>
          </React.Fragment>
        }
        stepNumber="1"
      />
    );
  }
}

export default inject("gameData")(observer(Passion));

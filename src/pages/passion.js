import React from "react";
import { observer } from "mobx-react";
import gameData from "../store";
import PromptTemplate from "../components/prompt-template";

class Passion extends React.Component {
  render() {
    return (
      <PromptTemplate
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
        {...this.props}
      />
    );
  }
}

export default observer(Passion);

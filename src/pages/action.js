import React from "react";
import { observer, inject } from "mobx-react";
import PromptTemplate from "../components/prompt-template";

class Action extends React.Component {
  render() {
    const { gameData } = this.props;

    return (
      <PromptTemplate
        {...this.props}
        store={gameData.passionStore}
        title={
          <React.Fragment>
            What <span className="title-emphasis">action</span> will you take ?
          </React.Fragment>
        }
        description={
          <React.Fragment>
            <p>What do you geek out about? What do you do in your free time?</p>
          </React.Fragment>
        }
        stepNumber="4"
      />
    );
  }
}

export default inject("gameData")(observer(Passion));

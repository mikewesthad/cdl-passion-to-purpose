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
            <p>Be as specific as you can</p>
            <p>and only provide one answer for each prompt.</p>
          </React.Fragment>
        }
      />
    );
  }
}

export default inject("gameData")(observer(Passion));

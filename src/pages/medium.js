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
        store={gameData.mediumStore}
        title={
          <React.Fragment>
            What will you <span className="title-emphasis">make</span>?
          </React.Fragment>
        }
        description={
          <React.Fragment>
            <p>What medium best serves your action?</p>
          </React.Fragment>
        }
        medium1={
          <React.Fragment>
            <p>Physical Projects (Poster, Event, Board Game, etc)</p>
          </React.Fragment>
        }
        medium2={
          <React.Fragment>
            <p>Digital Projects (Video, Podcast, Website)</p>
          </React.Fragment>
        }
        stepNumber="5"
      />
    );
  }
}

export default inject("gameData")(observer(Medium));

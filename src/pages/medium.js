import React from "react";
import { observer, inject } from "mobx-react";
import MediumPromptTemplate from "../components/medium-prompt-template";
import generator from "./generator";
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
        description2={
          <React.Fragment>
            <div>
              <ul class="columns" data-columns="2">
                <li>Poster</li>
                <li>Community Event</li>
                <li>Board Game</li>
                <li>Movie</li>
                <li>Podcast</li>
                <li>Website</li>
                <li>Sculpture</li>
              </ul>
            </div>
          </React.Fragment>
        }
        medium1={
          <React.Fragment>
            <p>I will make a...</p>
          </React.Fragment>
        }
        stepNumber="5"
      />
    );
  }
}

export default inject("gameData")(observer(Medium));

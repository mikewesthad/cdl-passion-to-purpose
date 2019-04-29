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
        store={gameData.audienceStore}
        title={
          <React.Fragment>
            Who is the intended <span className="title-emphasis">audience</span> for this project?
          </React.Fragment>
        }
        description={
          <React.Fragment>
            <p>Visualizing your audience/user will help develop your project.</p>
            <p>EX: Elementary School Student, Millenials, Carpenters, etc.</p>
            <p>Type in your choice of audience below.</p>
          </React.Fragment>
        }
        stepNumber="7"
      />
    );
  }
}

export default inject("gameData")(observer(Action));

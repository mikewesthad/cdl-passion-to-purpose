import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import ImpactPromptTemplate from "../components/impact-prompt-template";
//import { reaction } from "mobx";

class Impact extends React.Component {
  render() {
    const { gameData } = this.props;

    return (
      <ImpactPromptTemplate
        {...this.props}
        store={gameData}
        title={<React.Fragment>Explore Impact</React.Fragment>}
        description={
          <React.Fragment>
            <p>Designers and artists usually think about the impact they want to have.</p>
          </React.Fragment>
        }
        nextButton={
          <div className="text-center">
            <Link className="button" to={this.props.nextRoute}>
              Continue ⭢
            </Link>
          </div>
        }
      />
    );
  }
}

export default inject("gameData")(observer(Impact));

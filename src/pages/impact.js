import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import ActionPromptTemplate from "../components/action-prompt-template";
//import { reaction } from "mobx";

class Impact extends React.Component {
  render() {
    const { gameData } = this.props;

    return (
      <ActionPromptTemplate
        {...this.props}
        store={gameData}
        title={<React.Fragment>Explore affordances</React.Fragment>}
        description={
          <React.Fragment>
            <p>
              Choose an affordance that you think might best fit the action you're trying to take.
              Once you choose one, you'll see some examples of that affordance being used.
            </p>
            <p>Don’t worry we can change this later!</p>
          </React.Fragment>
        }
        nextButton={
          <div className="text-center">
            <Link className="button" to={this.props.nextRoute}>
              Continue ➞
            </Link>
          </div>
        }
      />
    );
  }
}

export default inject("gameData")(observer(Impact));

import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import MediumPromptTemplate from "../components/medium-prompt-template";
//import { reaction } from "mobx";

class Medium extends React.Component {
  render() {
    const { gameData } = this.props;

    return (
      <MediumPromptTemplate
        {...this.props}
        store={gameData}
        ///
        listTitle={
          <React.Fragment>
            <p>Mediums</p>
          </React.Fragment>
        }
        list={gameData.mediumOptions}
        ///
        //exampleProjectText={this.gameData.MediumOptions[0]}
        title={<React.Fragment>Explore media</React.Fragment>}
        description={
          <React.Fragment>
            <p>Okay, roll up your sleeves and get ready for an adventure.</p>
            <p>Select your favorite media category below. Don’t worry we can change this later!</p>
          </React.Fragment>
        }
        description2={
          <Link className="button" to={this.props.nextRoute}>
            Continue ➞
          </Link>
        }
      />
    );
  }
}

export default inject("gameData")(observer(Medium));

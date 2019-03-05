import React from "react";
import { observer } from "mobx-react";
import gameData from "../store";
import PromptTemplate from "../components/prompt-template";
import Checkbox from "../components/checkbox";

class Purpose extends React.Component {
  togglePremissions = () => {
    const gameData = this.props.gameData;
    gameData.setUserPermission(!gameData.hasUserPermission);
  };

  render() {
    const hasUserPermission = this.props.gameData.hasUserPermission;

    return (
      <PromptTemplate
        store={gameData.purposeStore}
        title={
          <React.Fragment>
            What is your <span style={{ fontWeight: 800 }}>purpose</span>?
          </React.Fragment>
        }
        description={
          <React.Fragment>
            <p>What issues do you care about? Where do you want to make an impact?</p>
          </React.Fragment>
        }
        afterPromptComponent={
          <div style={{ margin: "2rem 0" }}>
            <Checkbox
              id="sharing-checkbox"
              label="Share your passions & purposes anonymously to help us improve the tool."
              onChange={this.togglePremissions}
              checked={hasUserPermission}
            />
          </div>
        }
        stepNumber="2"
        {...this.props}
      />
    );
  }
}

export default observer(Purpose);

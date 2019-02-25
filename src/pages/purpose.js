import React from "react";
import { observer } from "mobx-react";
import gameData from "../store";
import PromptTemplate from "../components/prompt-template";

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
          <div
            className={`checkbox ${hasUserPermission ? "checkbox--checked" : ""}`}
            style={{ margin: "2rem 0", fontSize: "1rem" }}
          >
            <input
              type="checkbox"
              id="sharing-checkbox"
              value="sharing-checkbox"
              onChange={this.togglePremissions}
              checked={hasUserPermission}
            />
            <label htmlFor="sharing-checkbox">
              Share your passions & purposes anonymously to help us improve the tool.
            </label>
          </div>
        }
        stepNumber="2"
        {...this.props}
      />
    );
  }
}

export default observer(Purpose);

import React from "react";
import { observer, inject } from "mobx-react";
import PromptTemplate from "../components/prompt-template";
import Checkbox from "../components/checkbox";
import Timeline from "../components/timeline";

class Purpose extends React.Component {
  togglePremissions = () => {
    const { gameData } = this.props;
    gameData.setUserPermission(!gameData.hasUserPermission);
  };

  render() {
    const { gameData } = this.props;
    const hasUserPermission = gameData.hasUserPermission;

    return (
      <PromptTemplate
        {...this.props}
        store={gameData.purposeStore}
        title={
          <React.Fragment>
            What is your <span style={{ fontWeight: 800 }}>purpose</span>?
          </React.Fragment>
        }
        description={
          <React.Fragment>
            <p>Think about how you want to make an impact in the world.</p>
            <Timeline testing={{ width: "50%" }} />
          </React.Fragment>
        }
        afterPromptComponent={
          <div style={{ margin: "2rem" }}>
            <Checkbox
              id="sharing-checkbox"
              label="Share your passions & purposes anonymously to help us improve the tool."
              onChange={this.togglePremissions}
              checked={hasUserPermission}
            />
          </div>
        }
        stepNumber="2"
      />
    );
  }
}

export default inject("gameData")(observer(Purpose));

import React from "react";
import { observer } from "mobx-react";
import gameData from "../store";
import PromptTemplate from "../components/prompt-template";
@observer
export default class Purpose extends React.Component {
  render() {
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
        stepNumber="2"
        {...this.props}
      />
    );
  }
}

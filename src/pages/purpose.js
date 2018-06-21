import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

@observer
export default class Purpose extends React.Component {
  onSubmit = event => {
    const { gameData, history, nextRoute } = this.props;
    const purposeStore = gameData.purposeStore;
    event.preventDefault();
    if (purposeStore.areAllResponsesValid()) {
      history.push(nextRoute);
    }
  };

  setPurpose = (i, value) => {
    const purposeStore = this.props.gameData.purposeStore;
    purposeStore.setResponse(i, value);
  };

  render() {
    const { backRoute, gameData } = this.props;
    const purposeStore = gameData.purposeStore;
    const prompts = purposeStore.getQuestions();
    const allValid = purposeStore.areAllResponsesValid();

    const inputs = prompts.map((prompt, i) => {
      const id = `prompt-${i}`;
      const value = purposeStore.responses[i] || "";
      return (
        <div key={id}>
          <label htmlFor={id}>{prompt}</label>
          <br />
          <input
            type="text"
            value={value}
            id={id}
            required
            onChange={e => this.setPurpose(i, e.target.value)}
            placeholder="Type something here..."
          />
        </div>
      );
    });

    return (
      <div>
        <div>
          <Link to={backRoute}>↶ Back</Link>
        </div>
        <div>
          <p>Step 2/3</p>
        </div>
        <h1>
          What is your <span style={{ fontWeight: 800 }}>purpose</span>?
        </h1>
        <div>
          <p>What issues do you care about? Where do you want to make an impact?</p>
        </div>
        <form action="" onSubmit={this.onSubmit}>
          {inputs}
          <input type="submit" disabled={!allValid} value="Next ➞" />
        </form>
      </div>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

@observer
export default class Passion extends React.Component {
  onSubmit = event => {
    const { gameData, history, nextRoute } = this.props;
    const passionStore = gameData.passionStore;
    event.preventDefault();
    if (passionStore.areAllResponsesValid()) {
      history.push(nextRoute);
    }
  };

  setPassion = (i, value) => {
    const passionStore = this.props.gameData.passionStore;
    passionStore.setResponse(i, value);
  };

  render() {
    const { backRoute, gameData } = this.props;
    const passionStore = gameData.passionStore;
    const prompts = passionStore.getQuestions();
    const allValid = passionStore.areAllResponsesValid();

    const inputs = prompts.map((prompt, i) => {
      const id = `prompt-${i}`;
      const value = passionStore.responses[i] || "";
      return (
        <div key={id}>
          <label htmlFor={id}>{prompt}</label>
          <br />
          <input
            type="text"
            value={value}
            id={id}
            required
            onChange={e => this.setPassion(i, e.target.value)}
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
          <p>Step 1/3</p>
        </div>
        <h1>
          What is your <span style={{ fontWeight: 800 }}>passion</span>?
        </h1>
        <div>
          <p>What do you geek out about? What do you do in your free time?</p>
        </div>
        <form action="" onSubmit={this.onSubmit}>
          {inputs}
          <input type="submit" disabled={!allValid} value="Next ➞" />
        </form>
      </div>
    );
  }
}

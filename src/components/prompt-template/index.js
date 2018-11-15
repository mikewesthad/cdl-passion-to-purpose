import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import Container from "../container";

class PromptTemplate extends React.Component {
  state = {
    showError: false
  };

  onSubmit = event => {
    const { store, history, nextRoute } = this.props;
    event.preventDefault();
    if (store.areAllResponsesValid()) {
      history.push(nextRoute);
    } else {
      this.setState({ showError: true });
    }
  };

  setPassion = (i, value) => {
    const store = this.props.store;
    store.setResponse(i, value);
    this.setState({ showError: false });
  };

  render() {
    const { showError } = this.state;
    const { store, stepNumber, title, description, afterPromptComponent } = this.props;
    const prompts = store.getQuestions();

    const inputs = prompts.map((prompt, i) => {
      const id = `prompt-${i}`;
      const value = store.responses[i] || "";
      return (
        <div className="prompt" key={id}>
          <label className="prompt__label" htmlFor={id}>
            <span className="prompt__label-number">{i + 1}.</span>
            <span className="prompt__label-text">
              {prompt}
              ...
            </span>
          </label>
          <input
            type="text"
            className="prompt__input"
            value={value}
            id={id}
            onChange={e => this.setPassion(i, e.target.value)}
            placeholder="Type something here..."
          />
        </div>
      );
    });

    return (
      <Container>
        <div className="step-count">
          Step {stepNumber}
          /3
        </div>
        <h1 className="title">{title}</h1>
        <div className="description">{description}</div>
        <form className="form" onSubmit={this.onSubmit}>
          {inputs}
          {showError && (
            <div className="form__error-message">*Fill out all the prompts to continue!</div>
          )}
          {afterPromptComponent}
          <div className="navigation">
            <input className="button submit-button" type="submit" value="Next ➞" />
          </div>
        </form>
      </Container>
    );
  }
}

export default observer(PromptTemplate);

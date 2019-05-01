import React from "react";
import { observer } from "mobx-react";
import Container from "../container";
import style from "./index.module.scss";

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
    const {
      store,
      stepNumber,
      title,
      description,
      description2,
      medium1,
      afterPromptComponent
    } = this.props;
    const prompts = store.getQuestions();

    const inputs = prompts.map((prompt, i) => {
      const id = `prompt-${i}`;
      const value = store.responses[i] || "";
      return (
        <div className={style.prompt} key={id}>
          <label className={style.promptLabel} htmlFor={id}>
            <span className={style.promptLabelNumber}>{i + 1}.</span>
            <span className={style.promptLabelText}>{prompt}</span>
          </label>
          <input
            type="text"
            className={style.promptInput}
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
          /6
        </div>
        <h1 className="title">{title}</h1>
        <div className="description">{description}</div>
        <div className="description2">{description2}</div>
        <div className="medium1">{medium1}</div>
        <form className={style.form} onSubmit={this.onSubmit}>
          {inputs}
          {showError && (
            <div className={style.formError}>*Fill out all the prompts to continue!</div>
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

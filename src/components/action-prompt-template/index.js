import React from "react";
import { observer } from "mobx-react";
import Container from "../container";
import style from "./index.module.scss";

class ActionPromptTemplate extends React.Component {
  state = {
    showError: false
  };

  onSubmit = event => {
    const { store, history, nextRoute } = this.props;
    event.preventDefault();
    if (store.action !== "") {
      history.push(nextRoute);
    } else {
      this.setState({ showError: true });
    }
  };

  setPassion = (i, value) => {
    const store = this.props.store;
    this.setState({ showError: false });
  };

  onChange = event => {
    this.props.store.setAction(event.target.value);
    console.log(event.target.value);
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
          <input
            type="text"
            className={style.promptInput}
            value={store.action}
            onChange={this.onChange}
          />
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

export default observer(ActionPromptTemplate);

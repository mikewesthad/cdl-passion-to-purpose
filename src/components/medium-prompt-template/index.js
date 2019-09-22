import React from "react";
import { observer } from "mobx-react";
import Container from "../container";
import style from "./index.module.scss";

class MediumPromptTemplate extends React.Component {
  state = {
    showError: false
  };

  onSubmit = event => {
    const { store, history, nextRoute } = this.props;
    event.preventDefault();
    if (store.medium !== "") {
      history.push(nextRoute);
    } else {
      this.setState({ showError: true });
    }
  };

  onChange = event => {
    this.props.store.setMedium(event.target.value);
    console.log(event.target.value);
  };

  render() {
    const { showError } = this.state;
    const {
      store,
      gameData,
      listTitle,
      list,
      title,
      description,
      medium1,
      afterPromptComponent
    } = this.props;

    return (
      <Container>
        <div className="listTitle">{listTitle}</div>
        <div className="list">{list}</div>
        <h1 className="title">{title}</h1>
        <div className="description">{description}</div>
        <div className="medium1">{medium1}</div>

        <ul class="columns" data-columns="2">
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[0]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[1]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[2]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[3]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[4]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[5]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[5]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[6]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[7]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[7]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[8]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[9]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[10]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[11]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[12]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[13]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[14]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[15]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[16]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[17]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[18]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[19]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[20]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[21]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[22]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[23]}
              />
            </div>
          </li>
          <li>
            <div className="navigation">
              <input
                className="exampleProjectButton"
                type="button"
                value={gameData.mediumOptions[24]}
              />
            </div>
          </li>
        </ul>

        <div className="navigation">
          <input className="exampleProjectButton" type="button" value={"Current chosen one"} />
        </div>
        <form className={style.form} onSubmit={this.onSubmit}>
          <input
            type="text"
            className={style.promptInput}
            value={store.medium}
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

export default observer(MediumPromptTemplate);

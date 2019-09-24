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

  onChange = event => {
    this.props.store.setAction(event.target.value);
    console.log(event.target.value);
  };

  render() {
    const { store, gameData, title, description, description2, nextButton } = this.props;

    return (
      <Container>
        <h1 className="title">{title}</h1>
        <div className="description">{description}</div>

        <div className={style.actionContainer}>
          <input
            className={style.actionButton}
            type="submit"
            value={gameData.actionOptions[0]}
            onClick={() => {
              this.props.gameData.setAction(gameData.actionOptions[0]);
            }}
          />
          <input
            className={style.actionButton}
            type="submit"
            value={gameData.actionOptions[1]}
            onClick={() => {
              this.props.gameData.setAction(gameData.actionOptions[1]);
            }}
          />
          <input
            className={style.actionButton}
            type="submit"
            value={gameData.actionOptions[2]}
            onClick={() => {
              this.props.gameData.setAction(gameData.actionOptions[2]);
            }}
          />
          <input
            className={style.actionButton}
            type="submit"
            value={gameData.actionOptions[3]}
            onClick={() => {
              this.props.gameData.setAction(gameData.actionOptions[3]);
            }}
          />
          <input
            className={style.actionButton}
            type="submit"
            value={gameData.actionOptions[4]}
            onClick={() => {
              this.props.gameData.setAction(gameData.actionOptions[4]);
            }}
          />
          <input
            className={style.actionButton}
            type="submit"
            value={gameData.actionOptions[5]}
            onClick={() => {
              this.props.gameData.setAction(gameData.actionOptions[5]);
            }}
          />
          <input
            className={style.actionButton}
            type="submit"
            value={gameData.actionOptions[6]}
            onClick={() => {
              this.props.gameData.setAction(gameData.actionOptions[6]);
            }}
          />
          <input
            className={style.actionButton}
            type="submit"
            value={gameData.actionOptions[7]}
            onClick={() => {
              this.props.gameData.setAction(gameData.actionOptions[7]);
            }}
          />
        </div>
        {/*<div className="description2">{description2}</div>*/}
        <div className={style.nextButton}>{nextButton}</div>
      </Container>
    );
  }
}

export default observer(ActionPromptTemplate);

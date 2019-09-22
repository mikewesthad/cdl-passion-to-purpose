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
    const { store, gameData, title, description } = this.props;

    return (
      <Container>
        <h1 className="title">{title}</h1>
        <div className="description">{description}</div>

        <div className={style.mediumContainer}>
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[0]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[1]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[2]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[3]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[4]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[5]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[6]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[7]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[8]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[9]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[10]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[11]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[12]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[13]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[14]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[15]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[16]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[17]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[18]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[19]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[20]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[21]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[22]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[23]} />
          <input className={style.mediumButton} type="button" value={gameData.mediumOptions[24]} />
        </div>
        <div className="navigation">
          <input className="button submit-button" type="submit" value="Next ➞" />
        </div>
      </Container>
    );
  }
}

export default observer(MediumPromptTemplate);

import React from "react";
import { observer } from "mobx-react";
import Container from "../container";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

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
    const { gameData, title, description, nextButton } = this.props;

    return (
      <Container>
        <h1 className="title">{title}</h1>
        <div className="description">{description}</div>

        <div className={style.mediumContainer}>
          {gameData.mediumOptions.map(medium => {
            return (
              <div className={style.listItems}>
                {
                  <Link
                    to={this.props.nextRoute}
                    className={style.mediumButton}
                    onClick={() => {
                      this.props.gameData.setMedium(medium);
                    }}
                  >
                    {medium}
                  </Link>
                }
              </div>
            );
          })}
        </div>
        <div className={style.description}>More media examples coming soon</div>
      </Container>
    );
  }
}

export default observer(MediumPromptTemplate);

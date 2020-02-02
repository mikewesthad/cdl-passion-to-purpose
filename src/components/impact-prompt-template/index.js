import React from "react";
import { observer } from "mobx-react";
import Container from "../container";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

class ImpactPromptTemplate extends React.Component {
  state = {
    showError: false
  };

  onSubmit = event => {
    const { store, history, nextRoute } = this.props;
    event.preventDefault();
    if (store.impact !== "") {
      history.push(nextRoute);
    } else {
      this.setState({ showError: true });
    }
  };

  onChange = event => {
    this.props.store.setAction(event.target.value);
  };

  render() {
    const { gameData, title, description, nextButton } = this.props;

    return (
      <Container>
        <h1 className="title">{title}</h1>
        <div className="description">{description}</div>

        <div className={style.impactContainer}>
          {gameData.impactOptions.map(impact => {
            return (
              <div className={style.listItems}>
                {
                  <Link
                    to={this.props.nextRoute}
                    className={style.impactButton}
                    onClick={() => {
                      this.props.gameData.setImpact(impact);
                    }}
                  >
                    {impact}
                  </Link>
                }
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default observer(ImpactPromptTemplate);

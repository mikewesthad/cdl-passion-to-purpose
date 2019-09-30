import React, { Component } from "react";
import style from "./index.module.scss";

export default class Survey extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className={style.attributionText}>
          Please tell us what you thought of Passion to Purpose. Your feedback helps us improve the
          tool:
        </div>
        <a
          href="https://www.surveymonkey.com/r/PassiontoPurpose"
          className={style.logoLink}
          onClick={event => {
            event.preventDefault();
            window.open("https://www.surveymonkey.com/r/PassiontoPurpose");
          }}
        >
          Click here for a short survey.
        </a>
      </div>
    );
  }
}

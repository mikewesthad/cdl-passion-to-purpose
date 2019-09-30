import React, { Component } from "react";
import style from "./index.module.scss";

export default class FacilitatorAttribution extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className={style.attributionText}>
          Want to use this tool as a facilitator? Check out our
          <a
            href="https://convergencedesignlab.org/web-resources/PassionToPurpose_FacilitatorGuide.pdf"
            className={style.logoLink}
            onClick={event => {
              event.preventDefault();
              window.open(
                "https://convergencedesignlab.org/web-resources/PassionToPurpose_FacilitatorGuide.pdf"
              );
            }}
          >
            facilitator guide here.
          </a>
        </div>
      </div>
    );
  }
}

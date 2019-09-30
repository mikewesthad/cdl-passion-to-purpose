import React, { Component } from "react";
import { ReactComponent as LogoSvg } from "../../images/cdl-logo.svg";
import style from "./index.module.scss";

export default class FacilitatorAttribution extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className={style.attributionText}>
          Want to use this tool in a facilitator's environment? Check out our facilitator guide
          below:
        </div>
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
          <LogoSvg className={style.logo} />
        </a>
      </div>
    );
  }
}

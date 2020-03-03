import React from "react";
import Button from "../nav/button";
import style from "./index.module.scss";
import { ReactComponent as DownloadSvg } from "../../images/download.svg"; //previously restart.svg

class EditButton extends React.Component {
  render() {
    const { disabled = false, onClick } = this.props;
    return (
      <div className={style.editContainer}>
        <Button className={style.editButton} disabled={disabled} onClick={onClick}>
          <DownloadSvg />
        </Button>
      </div>
    );
  }
}

export default EditButton;

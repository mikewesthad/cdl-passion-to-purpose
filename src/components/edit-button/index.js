import React from "react";
import Button from "../nav/button";
import style from "./index.module.scss";
import { ReactComponent as EditSvg } from "../../images/edit.svg"; //previously restart.svg

class EditButton extends React.Component {
  render() {
    const { disabled = false, onClick } = this.props;
    return (
      <div className={style.editContainer}>
        <Button className={style.editButton} disabled={disabled} onClick={onClick}>
          <EditSvg />
        </Button>
      </div>
    );
  }
}

export default EditButton;

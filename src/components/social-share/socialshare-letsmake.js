import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon
} from "react-share";
import style from "./index.module.scss";

const p2pUrl = "https://www.passiontopurpose.io";
const twitterHashtags = ["PassionToPurpose"]; // Multiple, should not start with #
const facebookHashtag = "#PassionToPurpose"; // Only one, must start with #
const linkedinTitle = "Passion to Purpose Game";

class LetsMakeSocialShare extends Component {
  render() {
    const { gameData } = this.props;

    const passion = this.props.gameData.passionStore.responses[gameData.chosenPassionIndex];
    const purpose = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex];
    const text = `“How might we use ${passion} to ${purpose}?” What do you think of my project idea? Check out @ConvergenceDLab's Passion to Purpose tool:`;

    return (
      <div>
        <div className={style.callToAction}>Share your ideas!</div>
        <div className={style.shareButtons}>
          <TwitterShareButton
            className={style.shareButton}
            url={p2pUrl}
            title={text}
            hashtags={twitterHashtags}
          >
            <TwitterIcon round={true} />
          </TwitterShareButton>
          <FacebookShareButton
            className={style.shareButton}
            url={p2pUrl}
            quote={text}
            hashtag={facebookHashtag}
          >
            <FacebookIcon round={true} />
          </FacebookShareButton>
          <RedditShareButton className={style.shareButton} url={p2pUrl} title={text}>
            <RedditIcon round={true} />
          </RedditShareButton>
          <LinkedinShareButton
            className={style.shareButton}
            url={p2pUrl}
            title={linkedinTitle}
            description={text}
          >
            <LinkedinIcon round={true} />
          </LinkedinShareButton>
        </div>
      </div>
    );
  }
}

export default inject("gameData")(observer(LetsMakeSocialShare));

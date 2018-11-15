import React, { Component } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon
} from "react-share";
import style from "./index.module.scss";

const p2pUrl = "https://www.convergencedesignlab.org/p2p";
const twitterHashtags = ["PassionToPurpose"]; // Multiple, should not start with #
const facebookHashtag = "#PassionToPurpose"; // Only one, must start with #
const linkedinTitle = "Passion to Purpose Game";

export default class SocialShare extends Component {
  render() {
    const { passion, purpose } = this.props;
    const text = `“How might we use ${passion} to ${purpose}?” Check out @ConvergenceDLab's Passion to Purpose tool:`;

    return (
      <div>
        <div className={style.callToAction}>Like your idea? Share it!</div>
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
          <GooglePlusShareButton className={style.shareButton} url={p2pUrl} title={text}>
            <GooglePlusIcon round={true} />
          </GooglePlusShareButton>
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

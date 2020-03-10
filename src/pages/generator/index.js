import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import GeneratorTemplate from "../../components/generator-template";
import ShuffleButton from "../../components/shuffle-button";
import style from "./index.module.scss";
import { TimelineLite } from "gsap/all";
import { Textfit } from "react-textfit";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true, isAnimating: true };
    const gameData = this.props.gameData;
    gameData.shufflePassions();
    gameData.shufflePurposes();

    this.shuffleTl = new TimelineLite();
    this.passion0 = React.createRef();
    this.passion1 = React.createRef();
    this.passion2 = React.createRef();
    this.passion3 = React.createRef();

    this.purpose0 = React.createRef();
    this.purpose1 = React.createRef();
    this.purpose2 = React.createRef();
    this.purpose3 = React.createRef();

    this.shuffleButtonPassion = React.createRef();
    this.shuffleButtonPurpose = React.createRef();
    this.continueButton = React.createRef();

    this.passions = [];
    this.purposes = [];

    this.currentPassion = 0;
    this.currentPurpose = 0;
    this.onClickPassionTL = new TimelineLite({
      onComplete: function() {
        this.clear();
      }
    });
    this.onClickPurposeTL = new TimelineLite({
      onComplete: function() {
        this.clear();
      }
    });
  }

  copyPassionsAndPurposes() {
    for (var i = 0; i < this.props.gameData.passionStore.responses.length; i++) {
      this.passions[i] = this.props.gameData.passionStore.responses[i];
    }
    for (var i = 0; i < this.props.gameData.getPurposesWithVerb().length; i++) {
      this.purposes[i] = this.props.gameData.getPurposesWithVerb()[i];
    }
  }

  nextPassion() {
    var speed = 0.5;
    var linesize = 80;
    if (window.innerWidth <= 800) {
      linesize = 70;
    }
    if (!this.state.isAnimating) {
      if (this.currentPassion === 0) {
        this.onClickPassionTL
          .seek(2)

          .to(this.passion0.current, 0, { y: -linesize }, 0)
          .to(this.passion1.current, 0, { y: -linesize * 2 }, 0)
          .to(this.passion2.current, 0, { y: -linesize * 3 }, 0)
          .to(this.passion3.current, 0, { y: -linesize * 4 }, 0)

          .to(this.passion0.current, 0, { y: 0 }, 0) //teleport in view passion into view

          .to(this.passion1.current, speed, { y: -linesize }, 0) //bring second passion into view
          .to(this.passion0.current, speed / 1.5, { y: linesize }, 0.25) //move first passion down out of view
          .to(this.passion0.current, 0, { y: -linesize }, 0.5); //teleport first passion up out of view
      }

      if (this.currentPassion === 1) {
        this.onClickPassionTL
          .seek(2)

          .to(this.passion0.current, 0, { y: -linesize }, 0)
          .to(this.passion1.current, 0, { y: -linesize * 2 }, 0)
          .to(this.passion2.current, 0, { y: -linesize * 3 }, 0)
          .to(this.passion3.current, 0, { y: -linesize * 4 }, 0)

          .to(this.passion1.current, 0, { y: -linesize }, 0)

          .to(this.passion2.current, speed, { y: -linesize * 2 }, 0)
          .to(this.passion1.current, speed / 1.5, { y: 0 }, 0.25)
          .to(this.passion1.current, 0, { y: -linesize * 2 }, 0.5);
      }
      if (this.currentPassion === 2) {
        this.onClickPassionTL
          .seek(2)

          .to(this.passion0.current, 0, { y: -linesize }, 0)
          .to(this.passion1.current, 0, { y: -linesize * 2 }, 0)
          .to(this.passion2.current, 0, { y: -linesize * 3 }, 0)
          .to(this.passion3.current, 0, { y: -linesize * 4 }, 0)

          .to(this.passion2.current, 0, { y: -linesize * 2 }, 0)

          .to(this.passion3.current, speed, { y: -linesize * 3 }, 0)
          .to(this.passion2.current, speed / 1.5, { y: -linesize }, 0.25)
          .to(this.passion2.current, 0, { y: -linesize * 3 }, 0.5);
      }
      if (this.currentPassion === 3) {
        this.onClickPassionTL
          .seek(2)

          .to(this.passion0.current, 0, { y: -linesize }, 0)
          .to(this.passion1.current, 0, { y: -linesize * 2 }, 0)
          .to(this.passion2.current, 0, { y: -linesize * 3 }, 0)
          .to(this.passion3.current, 0, { y: -linesize * 4 }, 0)

          .to(this.passion3.current, 0, { y: -linesize * 3 }, 0)

          .to(this.passion0.current, speed, { y: 0 }, 0)
          .to(this.passion3.current, speed / 1.5, { y: -linesize * 2 }, 0.25)
          .to(this.passion3.current, 0, { y: -linesize * 4 }, 0.5);
      }

      if (this.currentPassion < this.props.gameData.passionStore.numQuestions - 1) {
        this.currentPassion++;
      } else {
        this.currentPassion = 0;
      }
    }
  }
  nextPurpose() {
    var speed = 0.5;
    var linesize = 80;
    if (window.innerWidth <= 800) {
      linesize = 70;
    }
    if (!this.state.isAnimating) {
      if (this.currentPurpose === 0) {
        this.onClickPurposeTL
          .seek(2)

          .to(this.purpose0.current, 0, { y: -linesize }, 0)
          .to(this.purpose1.current, 0, { y: -linesize * 2 }, 0)
          .to(this.purpose2.current, 0, { y: -linesize * 3 }, 0)
          .to(this.purpose3.current, 0, { y: -linesize * 4 }, 0)

          .to(this.purpose0.current, 0, { y: 0 }, 0) //teleport in view passion into view

          .to(this.purpose1.current, speed, { y: -linesize }, 0) //bring second passion into view
          .to(this.purpose0.current, speed / 1.5, { y: linesize }, 0.25) //move first passion down out of view
          .to(this.purpose0.current, 0, { y: -linesize }, 0.5); //teleport first passion up out of view
      }

      if (this.currentPurpose === 1) {
        this.onClickPurposeTL
          .seek(2)

          .to(this.purpose0.current, 0, { y: -linesize }, 0)
          .to(this.purpose1.current, 0, { y: -linesize * 2 }, 0)
          .to(this.purpose2.current, 0, { y: -linesize * 3 }, 0)
          .to(this.purpose3.current, 0, { y: -linesize * 4 }, 0)

          .to(this.purpose1.current, 0, { y: -linesize }, 0)

          .to(this.purpose2.current, speed, { y: -linesize * 2 }, 0)
          .to(this.purpose1.current, speed / 1.5, { y: 0 }, 0.25)
          .to(this.purpose1.current, 0, { y: -linesize * 2 }, 0.5);
      }
      if (this.currentPurpose === 2) {
        this.onClickPurposeTL
          .seek(2)

          .to(this.purpose0.current, 0, { y: -linesize }, 0)
          .to(this.purpose1.current, 0, { y: -linesize * 2 }, 0)
          .to(this.purpose2.current, 0, { y: -linesize * 3 }, 0)
          .to(this.purpose3.current, 0, { y: -linesize * 4 }, 0)

          .to(this.purpose2.current, 0, { y: -linesize * 2 }, 0)

          .to(this.purpose3.current, speed, { y: -linesize * 3 }, 0)
          .to(this.purpose2.current, speed / 1.5, { y: -linesize }, 0.25)
          .to(this.purpose2.current, 0, { y: -linesize * 3 }, 0.5);
      }
      if (this.currentPurpose === 3) {
        this.onClickPurposeTL
          .seek(2)

          .to(this.purpose0.current, 0, { y: -linesize }, 0)
          .to(this.purpose1.current, 0, { y: -linesize * 2 }, 0)
          .to(this.purpose2.current, 0, { y: -linesize * 3 }, 0)
          .to(this.purpose3.current, 0, { y: -linesize * 4 }, 0)

          .to(this.purpose3.current, 0, { y: -linesize * 3 }, 0)

          .to(this.purpose0.current, speed, { y: 0 }, 0)
          .to(this.purpose3.current, speed / 1.5, { y: -linesize * 2 }, 0.25)
          .to(this.purpose3.current, 0, { y: -linesize * 4 }, 0.5);
      }

      if (this.currentPurpose < this.props.gameData.purposeStore.numQuestions - 1) {
        this.currentPurpose++;
      } else {
        this.currentPurpose = 0;
      }
    }
  }

  toggleHiddenPassion() {
    if (this.state.isHidden) {
      this.setState({ isHidden: !this.state.isHidden });
      this.nextPassion();
      this.props.gameData.incrementPassionIndex();
    } else {
      this.nextPassion();
      this.props.gameData.incrementPassionIndex();
    }
  }

  toggleHiddenPurpose() {
    if (this.state.isHidden) {
      this.setState({ isHidden: !this.state.isHidden });
      this.nextPurpose();
      this.props.gameData.incrementPurposeIndex();
    } else {
      this.nextPurpose();
      this.props.gameData.incrementPurposeIndex();
    }
  }

  storeP2P = () => {
    this.props.store.setPurpose(this.render.purpose);
  };

  componentDidMount() {
    this.copyPassionsAndPurposes();

    var speed = 0.55;
    var linesize = 80;
    var startTime = 0.5;
    var spacingTime = 0.075;

    if (window.innerWidth <= 800) {
      linesize = 70;
    }

    this.shuffleTl

      .to(this.shuffleButtonPassion.current, 0, { opacity: 0 })
      .to(this.shuffleButtonPurpose.current, 0, { opacity: 0 })
      .to(this.continueButton.current, 0, { opacity: 0 })
      .to(this.passion0.current, 0, { y: -linesize * 2 }, 0)
      .to(this.passion1.current, 0, { y: -linesize * 3 }, 0)
      .to(this.passion2.current, 0, { y: -linesize * 4 }, 0)
      .to(this.passion3.current, 0, { y: -linesize * 5 }, 0)

      //First 'Spin' down
      .to(this.passion0.current, speed, { y: linesize * 2 }, startTime)
      .to(this.passion1.current, speed, { y: linesize }, startTime + spacingTime)
      .to(this.passion2.current, speed, { y: 0 }, startTime + spacingTime * 2)
      .to(this.passion3.current, speed, { y: -linesize }, startTime + spacingTime * 3)

      //Back to top
      .to(this.passion0.current, 0, { y: -linesize * 2 }, startTime + spacingTime * 4)
      .to(this.passion1.current, 0, { y: -linesize * 3 }, startTime + spacingTime * 5)
      .to(this.passion2.current, 0, { y: -linesize * 4 }, startTime + spacingTime * 6)
      .to(this.passion3.current, 0, { y: -linesize * 5 }, startTime + spacingTime * 7)

      //Second 'Spin' down
      .to(this.passion0.current, speed, { y: linesize * 2 }, startTime + spacingTime * 4)
      .to(this.passion1.current, speed, { y: linesize }, startTime + spacingTime * 5)
      .to(this.passion2.current, speed, { y: 0 }, startTime + spacingTime * 6)
      .to(this.passion3.current, speed, { y: -linesize }, startTime + spacingTime * 7)

      //Back to top
      .to(this.passion0.current, 0, { y: -linesize * 2 }, startTime + spacingTime * 8)
      .to(this.passion1.current, 0, { y: -linesize * 3 }, startTime + spacingTime * 9)
      .to(this.passion2.current, 0, { y: -linesize * 4 }, startTime + spacingTime * 10)
      .to(this.passion3.current, 0, { y: -linesize * 5 }, startTime + spacingTime * 11)

      //Second 'Spin' down
      .to(this.passion0.current, speed, { y: linesize * 2 }, startTime + spacingTime * 8)
      .to(this.passion1.current, speed, { y: linesize }, startTime + spacingTime * 9)
      .to(this.passion2.current, speed, { y: 0 }, startTime + spacingTime * 10)
      .to(this.passion3.current, speed, { y: -linesize }, startTime + spacingTime * 11)

      //Back to top
      .to(this.passion0.current, 0, { y: -linesize * 2 }, startTime + spacingTime * 12)
      .to(this.passion1.current, 0, { y: -linesize * 3 }, startTime + spacingTime * 13)
      .to(this.passion2.current, 0, { y: -linesize * 4 }, startTime + spacingTime * 14)
      .to(this.passion3.current, 0, { y: -linesize * 5 }, startTime + spacingTime * 15)

      .to(this.passion0.current, speed / 2, { y: 0 }, startTime + spacingTime * 12)

      /////////////////////////// PURPOSE ////////////////////////////

      .to(this.purpose0.current, 0, { y: -linesize * 2 }, 0)
      .to(this.purpose1.current, 0, { y: -linesize * 3 }, 0)
      .to(this.purpose2.current, 0, { y: -linesize * 4 }, 0)
      .to(this.purpose3.current, 0, { y: -linesize * 5 }, 0)
      //First 'purposeown
      .to(this.purpose0.current, speed, { y: linesize * 2 }, startTime)
      .to(this.purpose1.current, speed, { y: linesize }, startTime + spacingTime)
      .to(this.purpose2.current, speed, { y: 0 }, startTime + spacingTime * 2)
      .to(this.purpose3.current, speed, { y: -linesize }, startTime + spacingTime * 3)
      //Back topurpose
      .to(this.purpose0.current, 0, { y: -linesize * 2 }, startTime + spacingTime * 4)
      .to(this.purpose1.current, 0, { y: -linesize * 3 }, startTime + spacingTime * 5)
      .to(this.purpose2.current, 0, { y: -linesize * 4 }, startTime + spacingTime * 6)
      .to(this.purpose3.current, 0, { y: -linesize * 5 }, startTime + spacingTime * 7)
      //Second purposedown
      .to(this.purpose0.current, speed, { y: linesize * 2 }, startTime + spacingTime * 4)
      .to(this.purpose1.current, speed, { y: linesize }, startTime + spacingTime * 5)
      .to(this.purpose2.current, speed, { y: 0 }, startTime + spacingTime * 6)
      .to(this.purpose3.current, speed, { y: -linesize }, startTime + spacingTime * 7)
      //Back topurpose
      .to(this.purpose0.current, 0, { y: -linesize * 2 }, startTime + spacingTime * 8)
      .to(this.purpose1.current, 0, { y: -linesize * 3 }, startTime + spacingTime * 9)
      .to(this.purpose2.current, 0, { y: -linesize * 4 }, startTime + spacingTime * 10)
      .to(this.purpose3.current, 0, { y: -linesize * 5 }, startTime + spacingTime * 11)
      //Second purposedown
      .to(this.purpose0.current, speed, { y: linesize * 2 }, startTime + spacingTime * 8)
      .to(this.purpose1.current, speed, { y: linesize }, startTime + spacingTime * 9)
      .to(this.purpose2.current, speed, { y: 0 }, startTime + spacingTime * 10)
      .to(this.purpose3.current, speed, { y: -linesize }, startTime + spacingTime * 11)
      //Back topurpose
      .to(this.purpose0.current, 0, { y: -linesize * 2 }, startTime + spacingTime * 12)
      .to(this.purpose1.current, 0, { y: -linesize * 3 }, startTime + spacingTime * 13)
      .to(this.purpose2.current, 0, { y: -linesize * 4 }, startTime + spacingTime * 14)
      .to(this.purpose3.current, 0, { y: -linesize * 5 }, startTime + spacingTime * 15)

      .to(this.shuffleButtonPassion.current, speed, { opacity: 1 }, startTime + spacingTime * 14)
      .to(this.continueButton.current, speed, { opacity: 1 }, startTime + spacingTime * 14)
      .to(
        this.shuffleButtonPurpose.current,
        speed,
        {
          opacity: 1,
          onComplete: () => {
            this.setState({ isAnimating: false });
          }
        },
        startTime + spacingTime * 14
      )
      .to(this.purpose0.current, speed / 2, { y: 0 }, startTime + spacingTime * 12);
  }

  render() {
    const { gameData, nextRoute } = this.props;
    const passion0 = this.passions[0];
    const passion1 = this.passions[1];
    const passion2 = this.passions[2];
    const passion3 = this.passions[3];
    const purpose0 = this.purposes[0];
    const purpose1 = this.purposes[1];
    const purpose2 = this.purposes[2];
    const purpose3 = this.purposes[3];

    console.log("Animating State: " + this.state.isAnimating);
    console.log("window inner width: " + window.innerWidth);

    return (
      <GeneratorTemplate>
        <div className={style.generatedQuestion}>
          <span className={style.hmwPreset}>How might we use </span>
          <div className={style.passionContainer}>
            <div ref={this.shuffleButtonPassion}>
              <ShuffleButton
                // disabled={true}
                className={style.generatedButton}
                onClick={this.toggleHiddenPassion.bind(this)}
              />
            </div>
            <div className={style.overflowContainer}>
              <span className={style.passionAnimation} ref={this.passion0}>
                <div className={style.passionIndividual}>{passion0}</div>
              </span>
              <span className={style.passionAnimation} ref={this.passion1}>
                <div className={style.passionIndividual}>{passion1}</div>
              </span>
              <span className={style.passionAnimation} ref={this.passion2}>
                <div className={style.passionIndividual}>{passion2}</div>
              </span>
              <span className={style.passionAnimation} ref={this.passion3}>
                <div className={style.passionIndividual}>{passion3}</div>
              </span>
            </div>
          </div>
          <span className={style.hmwPreset}>to</span>
          <div className={style.purposeContainer}>
            <div ref={this.shuffleButtonPurpose}>
              <ShuffleButton
                //disabled={!this.state.isAnimating}
                className={style.generatedButton}
                onClick={this.toggleHiddenPurpose.bind(this)}
              />
            </div>
            <div className={style.overflowContainerPurpose}>
              <span className={style.purposeAnimation} ref={this.purpose0}>
                <div className={style.purposeIndividual}>{purpose0}</div>
              </span>
              <span className={style.purposeAnimation} ref={this.purpose1}>
                <div className={style.purposeIndividual}>{purpose1}</div>
              </span>
              <span className={style.purposeAnimation} ref={this.purpose2}>
                <div className={style.purposeIndividual}>{purpose2}</div>
              </span>
              <span className={style.purposeAnimation} ref={this.purpose3}>
                <div className={style.purposeIndividual}>{purpose3}</div>
              </span>
            </div>
          </div>
        </div>
        <div
          className="generateButtonContainer"
          ref={this.continueButton}
          style={{ textAlign: "center", marginTop: "5rem" }}
        >
          <Link className="button" to={nextRoute}>
            Continue with this &#8594;
          </Link>
        </div>
      </GeneratorTemplate>
    );
  }
}

export default inject("gameData")(observer(Generator));

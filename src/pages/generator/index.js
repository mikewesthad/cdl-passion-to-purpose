import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import GeneratorTemplate from "../../components/generator-template";
import GenerateAttribution from "../../components/generator-attribution";
import style from "./index.module.scss";
import { TimelineLite } from "gsap/all";

//
class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };
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

    this.passions = [];
    this.purposes = [];

    this.currentPassion = 0;
    this.currentPurpose = 0;
    this.onClickPassionTL0 = new TimelineLite({
      onComplete: function() {
        this.clear();
      }
    });
    this.onClickPassionTL1 = new TimelineLite({
      onComplete: function() {
        this.clear();
      }
    });
    this.onClickPassionTL2 = new TimelineLite({
      onComplete: function() {
        this.clear();
      }
    });
    this.onClickPassionTL3 = new TimelineLite({
      onComplete: function() {
        this.clear();
      }
    });
    this.onClickPurposeTL0 = new TimelineLite({
      onComplete: function() {
        this.clear();
      }
    });
    this.onClickPurposeTL1 = new TimelineLite({
      onComplete: function() {
        this.clear();
      }
    });
    this.onClickPurposeTL2 = new TimelineLite({
      onComplete: function() {
        this.clear();
      }
    });
    this.onClickPurposeTL3 = new TimelineLite({
      onComplete: function() {
        this.clear();
      }
    });
  }

  copyPassionsAndPurposes() {
    for (var i = 0; i < this.props.gameData.passionStore.responses.length; i++) {
      this.passions[i] = this.props.gameData.passionStore.responses[i];
      console.log("passion " + [i] + ": " + this.passions[i]);
    }
    for (var i = 0; i < this.props.gameData.getPurposesWithVerb().length; i++) {
      this.purposes[i] = this.props.gameData.getPurposesWithVerb()[i];
      console.log("purpose " + [i] + ": " + this.purposes[i]);
    }
  }

  nextPassion() {
    var speed = 2;
    var linesize = 75;

    if (this.currentPassion === 0) {
      this.onClickPassionTL0
        .to(this.passion0.current, speed, { y: linesize * 2 }, 0) //move first passion down out of view
        .to(this.passion1.current, speed, { y: -linesize }, 0.25)
        .to(this.passion0.current, 0, { y: -linesize * 2 }); //teleport first passion up out of view
    }

    if (this.currentPassion === 1) {
      this.onClickPassionTL1
        .to(this.passion1.current, speed, { y: linesize * 3 }, 0) //move first passion down out of view
        .to(this.passion2.current, speed, { y: -linesize * 2 }, 0.25)
        .to(this.passion1.current, 0, { y: -linesize * 3 }); //teleport first passion up out of view
    }
    if (this.currentPassion === 2) {
      this.onClickPassionTL2
        .to(this.passion2.current, speed, { y: linesize * 4 }, 0) //move first passion down out of view
        .to(this.passion3.current, speed, { y: -linesize * 3 }, 0.25)
        .to(this.passion2.current, 0, { y: -linesize * 4 }); //teleport first passion up out of view
    }
    if (this.currentPassion === 3) {
      this.onClickPassionTL3
        .to(this.passion3.current, speed, { y: linesize * 5 }, 0) //move first passion down out of view
        .to(this.passion0.current, speed, { y: 0 }, 0.25)
        .to(this.passion3.current, 0, { y: -linesize * 5 }); //teleport first passion up out of view
    }

    if (this.currentPassion < this.props.gameData.passionStore.numQuestions - 1) {
      this.currentPassion++;
    } else {
      this.currentPassion = 0;
    }
    console.log("Current passion: " + this.currentPassion);
  }
  nextPurpose() {
    var speed = 2;
    var linesize = 75;

    if (this.currentPurpose === 0) {
      this.onClickPurposeTL0
        .to(this.purpose0.current, speed, { y: linesize * 2 }, 0) //move first passion down out of view
        .to(this.purpose1.current, speed, { y: -linesize }, 0.25)
        .to(this.purpose0.current, 0, { y: -linesize * 2 }); //teleport first passion up out of view
    }

    if (this.currentPurpose === 1) {
      this.onClickPurposeTL1
        .to(this.purpose1.current, speed, { y: linesize * 3 }, 0) //move first passion down out of view
        .to(this.purpose2.current, speed, { y: -linesize * 2 }, 0.25)
        .to(this.purpose1.current, 0, { y: -linesize * 3 }); //teleport first passion up out of view
    }
    if (this.currentPurpose === 2) {
      this.onClickPurposeTL2
        .to(this.purpose2.current, speed, { y: linesize * 4 }, 0) //move first passion down out of view
        .to(this.purpose3.current, speed, { y: -linesize * 3 }, 0.25)
        .to(this.purpose2.current, 0, { y: -linesize * 4 }); //teleport first passion up out of view
    }
    if (this.currentPurpose === 3) {
      this.onClickPurposeTL3
        .to(this.purpose3.current, speed, { y: linesize * 5 }, 0) //move first passion down out of view
        .to(this.purpose0.current, speed, { y: 0 }, 0.25)
        .to(this.purpose3.current, 0, { y: -linesize * 5 }); //teleport first passion up out of view
    }

    if (this.currentPurpose < this.props.gameData.purposeStore.numQuestions - 1) {
      this.currentPurpose++;
    } else {
      this.currentPurpose = 0;
    }
    console.log("Current purpose: " + this.currentPurpose);
  }

  toggleHiddenPassion() {
    if (this.state.isHidden) {
      this.setState({ isHidden: !this.state.isHidden });
      this.nextPassion();
    } else {
      this.nextPassion();
    }
  }

  toggleHiddenPurpose() {
    if (this.state.isHidden) {
      this.setState({ isHidden: !this.state.isHidden });
      this.nextPurpose();
    } else {
      this.nextPurpose();
    }
  }

  storeP2P = () => {
    this.props.store.setPurpose(this.render.purpose);
  };

  componentDidMount() {
    this.copyPassionsAndPurposes();

    var speed = 2;
    var linesize = 250;

    this.shuffleTl
      .to(this.passion0.current, 0, { y: -linesize * 2 }, 0)
      .to(this.passion1.current, 0, { y: -linesize * 2 }, 0)
      .to(this.passion2.current, 0, { y: -linesize * 2 }, 0)
      .to(this.passion3.current, 0, { y: -linesize * 2 }, 0)

      //First 'Spin' down
      .to(this.passion0.current, speed, { y: linesize * 2 }, 0.5)
      .to(this.passion1.current, speed, { y: linesize * 2 }, 0.75)
      .to(this.passion2.current, speed, { y: linesize * 2 }, 1)
      .to(this.passion3.current, speed, { y: linesize * 2 }, 1.25)

      //Back to top
      .to(this.passion0.current, 0, { y: -linesize * 2 }, 1.75)
      .to(this.passion1.current, 0, { y: -linesize * 2 }, 1.75)
      .to(this.passion2.current, 0, { y: -linesize * 2 }, 1.75)
      .to(this.passion3.current, 0, { y: -linesize * 2 }, 1.75)

      //Second 'Spin' down
      .to(this.passion0.current, speed, { y: linesize * 2 }, 2)
      .to(this.passion1.current, speed, { y: linesize * 2 }, 2.25)
      .to(this.passion2.current, speed, { y: linesize * 2 }, 2.5)
      .to(this.passion3.current, speed, { y: linesize * 2 }, 2.75)

      //Back to top
      .to(this.passion0.current, 0, { y: -linesize * 2 }, 3.25)
      .to(this.passion1.current, 0, { y: -linesize * 2 }, 3.25)
      .to(this.passion2.current, 0, { y: -linesize * 2 }, 3.25)
      .to(this.passion3.current, 0, { y: -linesize * 2 }, 3.25)

      //Third 'Spin' down
      .to(this.passion0.current, speed, { y: linesize * 2 }, 3.5)
      .to(this.passion1.current, speed, { y: linesize * 2 }, 3.75)
      .to(this.passion2.current, speed, { y: linesize * 2 }, 4)
      .to(this.passion3.current, speed, { y: linesize * 2 }, 4.25)

      //Back to top
      .to(this.passion0.current, 0, { y: -linesize * 2 }, 4.75)
      .to(this.passion1.current, 0, { y: -linesize * 2 }, 4.75)
      .to(this.passion2.current, 0, { y: -linesize * 2 }, 4.75)
      .to(this.passion3.current, 0, { y: -linesize * 2 }, 4.75)

      /////////////////////////// PURPOSE ////////////////////////////

      .to(this.purpose0.current, 0, { y: -linesize * 3 }, 0)
      .to(this.purpose1.current, 0, { y: -linesize * 3 }, 0)
      .to(this.purpose2.current, 0, { y: -linesize * 3 }, 0)
      .to(this.purpose3.current, 0, { y: -linesize * 3 }, 0)

      //First 'Spin' down
      .to(this.purpose0.current, speed, { y: linesize * 3 }, 0.5)
      .to(this.purpose1.current, speed, { y: linesize * 3 }, 0.75)
      .to(this.purpose2.current, speed, { y: linesize * 3 }, 1)
      .to(this.purpose3.current, speed, { y: linesize * 3 }, 1.25)

      //Back to top
      .to(this.purpose0.current, 0, { y: -linesize * 3 }, 1.75)
      .to(this.purpose1.current, 0, { y: -linesize * 3 }, 1.75)
      .to(this.purpose2.current, 0, { y: -linesize * 3 }, 1.75)
      .to(this.purpose3.current, 0, { y: -linesize * 3 }, 1.75)

      //Second 'Spin' down
      .to(this.purpose0.current, speed, { y: linesize * 3 }, 2)
      .to(this.purpose1.current, speed, { y: linesize * 3 }, 2.25)
      .to(this.purpose2.current, speed, { y: linesize * 3 }, 2.5)
      .to(this.purpose3.current, speed, { y: linesize * 3 }, 2.75)

      //Back to top
      .to(this.purpose0.current, 0, { y: -linesize * 3 }, 3.25)
      .to(this.purpose1.current, 0, { y: -linesize * 3 }, 3.25)
      .to(this.purpose2.current, 0, { y: -linesize * 3 }, 3.25)
      .to(this.purpose3.current, 0, { y: -linesize * 3 }, 3.25)

      //Third 'Spin' down
      .to(this.purpose0.current, speed, { y: linesize * 3 }, 3.5)
      .to(this.purpose1.current, speed, { y: linesize * 3 }, 3.75)
      .to(this.purpose2.current, speed, { y: linesize * 3 }, 4)
      .to(this.purpose3.current, speed, { y: linesize * 3 }, 4.25)

      //Back to top
      .to(this.purpose0.current, 0, { y: -linesize * 3 }, 4.75)
      .to(this.purpose1.current, 0, { y: -linesize * 3 }, 4.75)
      .to(this.purpose2.current, 0, { y: -linesize * 3 }, 4.75)
      .to(this.purpose3.current, 0, { y: -linesize * 3 }, 4.75)

      .to(this.passion0.current, speed, { y: 0 }, 5)
      .to(this.purpose0.current, speed, { y: 0 }, 5);

    console.log("Current passion: " + this.currentPassion);
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

    return (
      <GeneratorTemplate>
        <div className={style.generatedQuestion}>
          <span className={style.hmwPreset}>How might we use </span>
          <div className={style.passionContainer}>
            <GenerateAttribution
              className={style.generatedButton}
              onClick={this.toggleHiddenPassion.bind(this)}
            />
            <div className={style.overflowContainer}>
              <span className={style.generatedPassion} ref={this.passion0}>
                {passion0}
              </span>
              <span className={style.generatedPassion} ref={this.passion1}>
                {passion1}
              </span>
              <span className={style.generatedPassion} ref={this.passion2}>
                {passion2}
              </span>
              <span className={style.generatedPassion} ref={this.passion3}>
                {passion3}
              </span>
            </div>
          </div>
          <span className={style.hmwPreset}>to</span>
          <div className={style.purposeContainer}>
            <GenerateAttribution
              className={style.generatedButton}
              onClick={this.toggleHiddenPurpose.bind(this)}
            />
            <div className={style.overflowContainerPurpose}>
              <span className={style.generatedPurpose} ref={this.purpose0}>
                {purpose0}?
              </span>
              <span className={style.generatedPurpose} ref={this.purpose1}>
                {purpose1}?
              </span>
              <span className={style.generatedPurpose} ref={this.purpose2}>
                {purpose2}?
              </span>
              <span className={style.generatedPurpose} ref={this.purpose3}>
                {purpose3}?
              </span>
            </div>
          </div>
        </div>
        <div className="generateButtonContainer" style={{ textAlign: "center", marginTop: "5rem" }}>
          {this.state.isHidden ? null : (
            <Link className="button" to={nextRoute}>
              Continue with this &#8594;
            </Link>
          )}
        </div>
      </GeneratorTemplate>
    );
  }
}

export default inject("gameData")(observer(Generator));

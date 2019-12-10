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
    this.testRef = React.createRef();
    this.passion1 = React.createRef();
    this.passion2 = React.createRef();
    this.passion3 = React.createRef();
    this.passion4 = React.createRef();
  }

  toggleHiddenPassion() {
    if (this.state.isHidden) {
      this.setState({ isHidden: !this.state.isHidden });
      this.props.gameData.incrementPassionIndex();
    } else {
      this.props.gameData.incrementPassionIndex();
    }
  }

  toggleHiddenPurpose() {
    if (this.state.isHidden) {
      this.setState({ isHidden: !this.state.isHidden });
      this.props.gameData.incrementPurposeIndex();
    } else {
      this.props.gameData.incrementPurposeIndex();
    }
  }

  storeP2P = () => {
    this.props.store.setPurpose(this.render.purpose);
    console.log(this.render.purpose);
  };

  componentDidMount() {
    var speed = 0.65;
    var linesize = 70;

    this.shuffleTl
      .to(this.passion1.current, 0, { y: -linesize * 2 }, 0)
      .to(this.passion2.current, 0, { y: -linesize * 2 }, 0)
      .to(this.passion3.current, 0, { y: -linesize * 2 }, 0)
      .to(this.passion4.current, 0, { y: -linesize * 2 }, 0)

      //First 'Spin' down
      .to(this.passion1.current, speed, { y: linesize * 2 }, 0.5)
      .to(this.passion2.current, speed, { y: linesize * 2 }, 0.75)
      .to(this.passion3.current, speed, { y: linesize * 2 }, 1)
      .to(this.passion4.current, speed, { y: linesize * 2 }, 1.25)

      //Back to top
      .to(this.passion1.current, 0, { y: -linesize * 2 }, 1.75)
      .to(this.passion2.current, 0, { y: -linesize * 2 }, 1.75)
      .to(this.passion3.current, 0, { y: -linesize * 2 }, 1.75)
      .to(this.passion4.current, 0, { y: -linesize * 2 }, 1.75)

      //Second 'Spin' down
      .to(this.passion1.current, speed, { y: linesize * 2 }, 2)
      .to(this.passion2.current, speed, { y: linesize * 2 }, 2.25)
      .to(this.passion3.current, speed, { y: linesize * 2 }, 2.5)
      .to(this.passion4.current, speed, { y: linesize * 2 }, 2.75)

      //Back to top
      .to(this.passion1.current, 0, { y: -linesize * 2 }, 3.25)
      .to(this.passion2.current, 0, { y: -linesize * 2 }, 3.25)
      .to(this.passion3.current, 0, { y: -linesize * 2 }, 3.25)
      .to(this.passion4.current, 0, { y: -linesize * 2 }, 3.25)

      //Third 'Spin' down
      .to(this.passion1.current, speed, { y: linesize * 2 }, 3.5)
      .to(this.passion2.current, speed, { y: linesize * 2 }, 3.75)
      .to(this.passion3.current, speed, { y: linesize * 2 }, 4)
      .to(this.passion4.current, speed, { y: linesize * 2 }, 4.25)

      //Back to top
      .to(this.passion1.current, 0, { y: -linesize * 2 }, 4.75)
      .to(this.passion2.current, 0, { y: -linesize * 2 }, 4.75)
      .to(this.passion3.current, 0, { y: -linesize * 2 }, 4.75)
      .to(this.passion4.current, 0, { y: -linesize * 2 }, 4.75)

      .to(this.passion1.current, speed, { y: 0 }, 5);
    /*
    //Land on First Slot
    .to(".box1", speed, { y: 0 }, 5)
    .to(".box1", speed, { y: linesize }, 6) //box 1 down out of view
    .to(".box1", 0, { y: -linesize * 2 }) //send box1 back to top
    //Move second box down
    .to(".box2", speed, { y: -linesize }, 6.5)
    .to(".box2", speed, { y: 0 }, 7.5)
    .to(".box2", 0, { y: -linesize * 3 }) //send box 2 back to top
    //Move third box down
    .to(".box3", speed, { y: -linesize * 2 }, 8)
    .to(".box3", speed, { y: -linesize }, 9)
    .to(".box3", 0, { y: -linesize * 4 }) //send box 3 back to top
    //Move fourth box down
    .to(".box4", speed, { y: -linesize * 3 }, 9.5)
    .to(".box4", speed, { y: -linesize * 2 }, 10.5)
    .to(".box4", 0, { y: -linesize * 5 })
      
*/
  }

  render() {
    const { gameData, nextRoute } = this.props;
    const passion1 = gameData.passionStore.responses[gameData.chosenPassionIndex];
    const passion2 = gameData.passionStore.responses[gameData.chosenPassionIndex + 1];
    const passion3 = gameData.passionStore.responses[gameData.chosenPassionIndex + 2];
    const passion4 = gameData.passionStore.responses[gameData.chosenPassionIndex + 3];
    const purpose1 = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex];
    const purpose2 = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex + 1];
    const purpose3 = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex + 2];
    const purpose4 = gameData.getPurposesWithVerb()[gameData.chosenPurposeIndex + 3];

    return (
      <GeneratorTemplate>
        <div className={style.generatedQuestion}>
          <span className={style.hmwPreset} ref={this.testRef}>
            How might we use{" "}
          </span>
          <div className={style.passionContainer}>
            <GenerateAttribution
              className={style.generatedButton}
              onClick={this.toggleHiddenPassion.bind(this)}
            />
            <span className={style.generatedPassion} ref={this.passion1}>
              {passion1}
            </span>
            <span className={style.generatedPassion} ref={this.passion2}>
              {passion2}
            </span>
            <span className={style.generatedPassion} ref={this.passion3}>
              {passion3}
            </span>
            <span className={style.generatedPassion} ref={this.passion4}>
              {passion4}
            </span>
          </div>
          <span className={style.hmwPreset}>to</span>
          <div className={style.purposeContainer}>
            <GenerateAttribution
              className={style.generatedButton}
              onClick={this.toggleHiddenPurpose.bind(this)}
            />

            <span className={style.generatedPurpose} ref={this.purpose1}>
              {purpose1}?
            </span>
            <span className={style.generatedPurpose} ref={this.purpose2}>
              {purpose2}?
            </span>
            <span className={style.generatedPurpose} ref={this.purpose3}>
              {purpose3}?
            </span>
            <span className={style.generatedPurpose} ref={this.purpose4}>
              {purpose4}?
            </span>
          </div>
        </div>
        <div className="generateButtonContainer" style={{ textAlign: "center" }}>
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

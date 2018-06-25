import React from "react";
import { observer } from "mobx-react";
import { generateCombinations } from "../utils/array-utils";
import Container from "../components/container";

@observer
export default class Generator extends React.Component {
  constructor(props) {
    super(props);

    const gameData = this.props.gameData;
    const passionStore = gameData.passionStore;
    this.state = {
      permutations: generateCombinations(passionStore.responses, gameData.getPurposesWithVerb())
    };
  }

  componentDidMount() {
    const gameData = this.props.gameData;
    gameData.saveToFirebase();
  }

  startOver = () => {
    const { history, nextRoute } = this.props;
    history.push(nextRoute);
  };

  getNextPermutation = () => {
    this.setState(prev => {
      const gameData = this.props.gameData;
      const passionStore = gameData.passionStore;
      if (prev.permutations.length === 1) {
        return {
          permutations: generateCombinations(passionStore.responses, gameData.getPurposesWithVerb())
        };
      } else {
        return { permutations: this.state.permutations.slice(1) };
      }
    });
  };

  render() {
    const [passion, purpose] = this.state.permutations[0];

    const question = encodeURIComponent(
      `How might we use ${passion} to ${purpose}? Check out @ConvergenceDLab's Passion to Purpose:`
    );
    const url = encodeURIComponent(
      `https://www.convergencedesignlab.org/web-resources/passion-to-purpose/`
    );
    const twitterUrl = `https://twitter.com/intent/tweet?text=${question}&url=${url}`;
    return (
      <Container>
        <div className="step-count">Step 3/3</div>
        <h1 className="title">How might we... ?</h1>
        <div className="description">
          Let’s combine your passion and purpose – it’s okay if the ideas are crazy!
        </div>
        <div className="generated-question">
          How might we use <span className="generated-passion">{passion}</span> to{" "}
          <span className="generated-purpose">{purpose}</span>?
        </div>
        <div className="text-center">
          <div>
            <button className="button button__stacked" onClick={this.getNextPermutation}>
              Generate Another
            </button>
          </div>
          <div>
            <a className="button button__stacked" href={twitterUrl} target="_blank">
              Tweet it
            </a>
          </div>
          <div>
            <button className="button button__stacked" onClick={this.startOver}>
              Start over
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

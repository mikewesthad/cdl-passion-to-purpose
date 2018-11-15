import React from "react";
import { observer } from "mobx-react";
import { generateCombinations } from "../utils/array-utils";
import Container from "../components/container";
import SocialShare from "../components/social-share";

class Generator extends React.Component {
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

    return (
      <Container>
        <div className="step-count">Step 3/3</div>
        <h1 className="title">How might we...?</h1>
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
              Generate Another Question
            </button>
          </div>
          <SocialShare passion={passion} purpose={purpose} />
        </div>
      </Container>
    );
  }
}

export default observer(Generator);

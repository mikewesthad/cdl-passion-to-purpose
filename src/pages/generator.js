import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { shuffle, generateCombinations } from "../utils/array-utils";

@observer
export default class Generator extends React.Component {
  constructor(props) {
    super(props);

    const { passionStore, purposeStore } = this.props.gameData;
    this.state = {
      permutations: generateCombinations(passionStore.responses, purposeStore.responses)
    };
  }

  startOver = () => {
    const { gameData, history, nextRoute } = this.props;
    gameData.reset();
    history.push(nextRoute);
  };

  getNextPermutation = () => {
    this.setState(prev => {
      const { passionStore, purposeStore } = this.props.gameData;
      if (prev.permutations.length === 1) {
        return {
          permutations: generateCombinations(passionStore.responses, purposeStore.responses)
        };
      } else {
        return { permutations: this.state.permutations.slice(1) };
      }
    });
  };

  render() {
    const { backRoute } = this.props;
    const [passion, purpose] = this.state.permutations[0];

    return (
      <div>
        <div>
          <Link to={backRoute}>↶ Back</Link>
        </div>
        <div>
          <p>Step 3/3</p>
        </div>
        <h1>How might we.... ?</h1>
        <div>
          <p>Let’s combine your passion and purpose – it’s okay if the ideas are crazy!</p>
          <p>
            How might we use <u>{passion}</u> to <u>{purpose}</u>?
          </p>
        </div>
        <div>
          <button onClick={this.getNextPermutation}>Generate Another</button>
          <button>Tweet it</button>
          <button onClick={this.startOver}>Start over</button>
        </div>
      </div>
    );
  }
}

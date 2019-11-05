import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import LetsMakeSocialShare from "../components/social-share/socialshare-letsmake";
import Container from "../components/container";

class FinalContext extends React.Component {
  render() {
    const { gameData, nextRoute } = this.props;

    return (
      <Container>
        <div className="context-container" to={nextRoute}>
          <h2 className="title" />
          <div className="description">
            <p>
              Now that you have your idea, it's time to start making! You can get started by
              sketching or tinkering. Share out your idea on social media to get feedback and
              friend-source even more ideas.
            </p>
          </div>
        </div>
        <div className="text-center">
          <LetsMakeSocialShare
            passion={gameData.passionStore.responses[gameData.chosenPassionIndex]}
          />
          <p />
          <Link className="button" to={nextRoute}>
            Continue &#8594;
          </Link>
        </div>
      </Container>
    );
  }
}

export default inject("gameData")(observer(FinalContext));

import { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";
import PropTypes from "prop-types";
import DummyGA from "./dummy-ga";
import parseGameRoom from "../../utils/parse-game-room";

const gameRoom = parseGameRoom();

/**
 * A null-rendering component that observers the router's pathname in order to log page views and
 * events with Google Analytics. This logs "Game Started", "Game Compeleted" and "Game Restarted"
 * events based on the route props given.
 *
 * @class Analytics
 * @extends {Component}
 */
class Analytics extends Component {
  static propTypes = {
    /** The analytics ID for the web app, from your GA dashboard */
    trackingId: PropTypes.string.isRequired,
    /** If true, this will not log everything to the console rather than to GA */
    dummyLog: PropTypes.bool.isRequired,
    /** The route corresponding to the start of the game - logs "Game Started" or "Game Restarted"
     * GA events */
    gameStartRoute: PropTypes.string,
    /** The route corresponding to the end of the game - logs "Game Completed" GA event */
    gameEndRoute: PropTypes.string
  };

  static defaultProps = {
    dummyLog: false
  };

  constructor(props) {
    super(props);
    const analytics = this.props.dummyLog ? DummyGA : ReactGA;
    analytics.initialize(this.props.trackingId);
  }

  logCurrentPage() {
    const { location, dummyLog } = this.props;
    const pathname = location.pathname;
    const analytics = dummyLog ? DummyGA : ReactGA;
    analytics.pageview(`${gameRoom}${pathname}`);
  }

  logEvent(event) {
    const analytics = this.props.dummyLog ? DummyGA : ReactGA;
    analytics.event(event);
  }

  componentDidMount() {
    this.logCurrentPage();
    this.logEvent({ category: "Game", action: "Game Started" });
  }

  componentDidUpdate(prevProps) {
    const { location, gameStartRoute, gameEndRoute } = this.props;
    const pathname = location.pathname;
    const prevPathname = prevProps.location.pathname;
    if (prevPathname !== pathname) {
      this.logCurrentPage();
      if (pathname === gameStartRoute) {
        this.logEvent({ category: "Game", action: "Game Restarted" });
      } else if (pathname === gameEndRoute) {
        this.logEvent({ category: "Game", action: "Game Completed" });
      }
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Analytics);

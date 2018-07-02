import { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";
import PropTypes from "prop-types";
import DummyGA from "./dummy-ga";

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
    /** The basename that the router uses */
    basename: PropTypes.string,
    /** The route corresponding to the start of the game - logs "Game Started" or "Game Restarted"
     * GA events */
    gameStartRoute: PropTypes.string,
    /** The route corresponding to the end of the game - logs "Game Completed" GA event */
    gameEndRoute: PropTypes.string
  };

  static defaultProps = {
    basename: "",
    dummyLog: false
  };

  constructor(props) {
    super(props);

    const analytics = this.props.dummyLog ? DummyGA : ReactGA;
    analytics.initialize(this.props.trackingId);
  }

  /**
   * Normalize the current pathname so that it never contains basename. This ensures that page
   * routes will be logged the same regardless of which subdirectory they are hosted from.
   *
   * @returns {string} The normalized pathname
   * @memberof Analytics
   */
  getNormalizedPathname() {
    const { location, basename } = this.props;
    if (location.pathname.startsWith(basename)) return location.pathname.replace(basename, "");
    else return location.pathname;
  }

  componentDidMount() {
    const analytics = this.props.dummyLog ? DummyGA : ReactGA;
    analytics.pageview(this.getNormalizedPathname());
    analytics.event({ category: "Game", action: "Game Started" });
  }

  componentDidUpdate(prevProps) {
    const analytics = this.props.dummyLog ? DummyGA : ReactGA;
    const prevPathname = prevProps.location.pathname;
    const { location, gameStartRoute, gameEndRoute } = this.props;
    const pathname = this.getNormalizedPathname();
    if (prevPathname !== location.pathname) {
      analytics.pageview(pathname);
      if (pathname === gameStartRoute) {
        analytics.event({ category: "Game", action: "Game Restarted" });
      } else if (pathname === gameEndRoute) {
        analytics.event({ category: "Game", action: "Game Completed" });
      }
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Analytics);

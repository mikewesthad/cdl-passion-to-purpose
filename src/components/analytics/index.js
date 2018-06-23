import { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";

class Analytics extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize(this.props.trackingId);
  }

  getNormalizedPathname() {
    const { location, basename } = this.props;
    if (location.pathname.startsWith(basename)) return location.pathname.replace(basename, "");
    else return location.pathname;
  }

  componentDidMount() {
    ReactGA.pageview(this.getNormalizedPathname());
    ReactGA.event({ category: "Game", action: "Game Started" });
  }

  componentDidUpdate(prevProps) {
    const prevPathname = prevProps.location.pathname;
    const { location, gameStartRoute, gameEndRoute } = this.props;
    const pathname = this.getNormalizedPathname();
    if (prevPathname !== location.pathname) {
      ReactGA.pageview(this.getNormalizedPathname());
      if (pathname === gameStartRoute) {
        ReactGA.event({ category: "Game", action: "Game Restarted" });
      } else if (pathname === gameEndRoute) {
        ReactGA.event({ category: "Game", action: "Game Completed" });
      }
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Analytics);

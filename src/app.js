import React, { Component } from "react";
import { MemoryRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import Url from "url-parse";
import PageTransition from "./components/page-transition";
import PageWrapper from "./components/page-wrapper";
import Analytics from "./components/analytics";
import { routes, routeMap } from "./pages";
import gameData from "./store";
import Nav from "./components/nav";

const isDev = process.env.NODE_ENV === "development";

// TODO: verify this works in production and add to GA
const baseUrl = new Url(isDev ? "http://localhost:3000" : process.env.PUBLIC_URL);
const currentUrl = new Url(window.location);
const gameRoom = currentUrl.pathname.slice().replace(baseUrl.pathname, "");
console.log(`Game Room: ${gameRoom}`);

const App = withRouter(
  class App extends Component {
    goBack = () => this.props.history.goBack();
    restart = () => this.props.history.push(routeMap.home.path);

    render() {
      const { location } = this.props;
      return (
        <PageWrapper>
          <Nav
            disabled={location.pathname === routeMap.home.path}
            onBack={this.goBack}
            onRestart={this.restart}
          />

          <Analytics
            dummyLog={isDev}
            trackingId="UA-114340105-6"
            gameStartRoute={routeMap.home.path}
            gameEndRoute={routeMap.generator.path}
          />

          <Route
            render={({ location }) => (
              <PageTransition pageKey={location.pathname}>
                <Switch location={location}>
                  {routes.map((route, i) => {
                    const nextRoute = i < routes.length - 1 ? routes[i + 1].path : routes[0].path;

                    // All pages have the same general API - they need the game store & next route
                    const { key, path, Component, ...otherProps } = route;
                    return (
                      <Route
                        key={key}
                        path={path}
                        {...otherProps}
                        render={props => (
                          <Component gameData={gameData} nextRoute={nextRoute} {...props} />
                        )}
                      />
                    );
                  })}

                  <Redirect to={routeMap.home.path} />
                </Switch>
              </PageTransition>
            )}
          />
        </PageWrapper>
      );
    }
  }
);

class RoutedApp extends Component {
  render() {
    return (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  }
}

export default observer(RoutedApp);

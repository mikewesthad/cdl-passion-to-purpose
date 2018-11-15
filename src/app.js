import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import PageTransition from "./components/page-transition";
import PageWrapper from "./components/page-wrapper";
import Analytics from "./components/analytics";
import { routes, routeMap } from "./pages";
import gameData from "./store";

// create-react-app uses package.json's homepage field to configure the path for assets, so use the
// same URL to figure out the basename for the router
const isDev = process.env.NODE_ENV === "development";
let basename = "";
if (!isDev) {
  const publicUrl = process.env.PUBLIC_URL;
  const parts = publicUrl.replace(/https?:\/\//, "").split("/");
  basename = parts.slice(1).join("/");
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={basename}>
        <Route
          render={({ location }) => {

            return (
              <PageWrapper>
                <Analytics
                  basename={basename}
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
                          const nextRoute =
                            i < routes.length - 1 ? routes[i + 1].path : routes[0].path;

                          // All pages have the same general API - they need the game store, next
                          // route and previous route
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
          }}
        />
      </BrowserRouter>
    );
  }
}

export default observer(App);

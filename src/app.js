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

@observer
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={basename}>
        <Route
          render={({ location }) => {
            // If the user tries to jump ahead, redirect to home
            const pathname = location.pathname;
            const { passionStore, purposeStore } = gameData;
            const isPassionValid = passionStore.areAllResponsesValid();
            const isPurposeValid = purposeStore.areAllResponsesValid();
            if (
              (pathname === routeMap.purpose.path && !isPassionValid) ||
              (pathname === routeMap.generator.path && (!isPassionValid || !isPurposeValid))
            ) {
              return <Redirect to={routeMap.home.path} />;
            }

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
                          // Find previous and next routes for the current route
                          let backRoute, nextRoute;
                          if (i > 0) backRoute = routes[i - 1].path;
                          if (i < routes.length - 1) nextRoute = routes[i + 1].path;
                          else nextRoute = routes[0].path;

                          // All pages have the same general API - they need the game store, next
                          // route and previous route
                          const { key, path, Component, ...otherProps } = route;
                          return (
                            <Route
                              key={key}
                              path={path}
                              {...otherProps}
                              render={props => (
                                <Component
                                  gameData={gameData}
                                  nextRoute={nextRoute}
                                  backRoute={backRoute}
                                  {...props}
                                />
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

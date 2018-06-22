import React from "react";
import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import PageTransition from "./components/page-transition";
import PageWrapper from "./components/page-wrapper";
import { Home, Passion, Purpose, Generator } from "./pages";
import gameData from "./store";

// NEED TO CONFIG APACHE TO REDIRECT EVERYTHING HERE

const dev = process.env.NODE_ENV === "development";
const publicUrl = process.env.PUBLIC_URL;
const parts = publicUrl.replace(/https?:\/\//, "").split("/");
const base = parts.slice(1).join("/");
const basename = dev ? "/" : base;

// Linear sequence of routes
const routes = [
  { key: "home", path: "/", exact: true, Component: Home },
  { key: "passion", path: "/passion", Component: Passion },
  { key: "purpose", path: "/purpose", Component: Purpose },
  { key: "generator", path: "/generator", Component: Generator }
];

const routeMap = {};
routes.forEach(route => (routeMap[route.key] = route));

// Add GA
{
  /* <Route
  render={props => (
    <Analytics
      basePath={getBasePath(location.pathname)}
      trackingId="UA-114340105-4"
      gameStartRoute="/"
      gameEndRoute="/11"
      {...props}
    />
  )}
/> */
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
                <Route
                  render={({ location }) => (
                    <PageTransition pageKey={location.pathname}>
                      <Switch location={location}>
                        {routes.map((route, i) => {
                          let backRoute, nextRoute;
                          if (i > 0) backRoute = routes[i - 1].path;
                          if (i < routes.length - 1) nextRoute = routes[i + 1].path;
                          else nextRoute = routes[0].path;
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

                        <Redirect to="/" />
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

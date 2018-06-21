import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import PageTransition from "./components/page-transition";
import PageWrapper from "./components/page-wrapper";
import Container from "./components/container";
import { Home, Passion, Purpose, Generator } from "./pages";
import gameData from "./store";
import "./style/global/index.scss";

// NEED TO CONFIG APACHE TO REDIRECT EVERYTHING HERE

const dev = process.env.NODE_ENV === "development";
console.log(process.env.NODE_ENV);

const basename = dev ? "/" : "/cdl-passion-to-purpose";

// Linear sequence of routes
const routes = [
  { key: "home", path: "/", exact: true, Component: Home },
  { key: "passion", path: "/passion", Component: Passion },
  { key: "purpose", path: "/purpose", Component: Purpose },
  { key: "generator", path: "/generator", Component: Generator }
];
const routeMap = {};
routes.forEach(route => (routeMap[route.key] = route));

const getBasePath = location => {
  let parts = location.split("/");
  parts.pop();
  return parts.join("/");
};

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
            // Check paths here are redirect to first page if missing data

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

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import PageTransition from "./components/page-transition";
import PageWrapper from "./components/page-wrapper";
import Container from "./components/container";

import "./style/global/index.scss";

// NEED TO CONFIG APACHE TO REDIRECT EVERYTHING HERE

const dev = process.env.NODE_ENV === "development";
console.log(process.env.NODE_ENV);

const basename = dev ? "/" : "/cdl-passion-to-purpose";
const ROUTES = {
  HOME: { key: "home", path: "/", exact: true },
  PASSIONS: { key: "passions", path: "/passions" },
  PURPOSES: { key: "purposes", path: "/purposes" },
  QUESTION: { key: "question", path: "/question" }
};

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
                        <Route
                          {...ROUTES.HOME}
                          render={props => (
                            <Container>
                              <h1>Home</h1>
                              <h1>HTML Ipsum Presents</h1>

                              <ol>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                              </ol>

                              <blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                  magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
                                  molestie gravida. Curabitur massa. Donec eleifend, libero at
                                  sagittis mollis, tellus est malesuada tellus, at luctus turpis
                                  elit sit amet quam. Vivamus pretium ornare est.
                                </p>
                              </blockquote>

                              <Link to={ROUTES.PASSIONS.path}>Next</Link>
                            </Container>
                          )}
                        />

                        <Route
                          {...ROUTES.PASSIONS}
                          render={props => (
                            <Container>
                              <h1>Passions</h1>
                              <Link to={ROUTES.HOME.path}>Previous</Link>
                              <Link to={ROUTES.PURPOSES.path}>Next</Link>
                            </Container>
                          )}
                        />

                        <Route
                          {...ROUTES.PURPOSES}
                          render={props => (
                            <div>
                              <h1>Purposes</h1>
                              <Link to={ROUTES.PASSIONS.path}>Previous</Link>
                              <Link to={ROUTES.QUESTION.path}>Next</Link>
                            </div>
                          )}
                        />

                        <Route
                          {...ROUTES.QUESTION}
                          render={props => (
                            <div>
                              <h1>Question</h1>
                              <Link to={ROUTES.HOME.path}>Home</Link>
                            </div>
                          )}
                        />

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

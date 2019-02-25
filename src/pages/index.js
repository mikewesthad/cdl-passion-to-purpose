import Home from "./home";
import Passion from "./passion";
import Purpose from "./purpose";
import Generator from "./generator/";

// The app is based on a linear sequence of routes - from the current route you can go to previous
// route (i - 1) or the next route (i + 1)
const routes = [
  { key: "home", path: "/", exact: true, Component: Home },
  { key: "passion", path: "/passion", Component: Passion },
  { key: "purpose", path: "/purpose", Component: Purpose },
  { key: "generator", path: "/generator", Component: Generator }
];
// Create a mapping from route key -> route object above
const routeMap = routes.reduce((map, route) => {
  map[route.key] = route;
  return map;
}, {});

export { Home, Passion, Purpose, Generator, routes, routeMap };

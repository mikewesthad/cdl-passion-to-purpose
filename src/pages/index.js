import Home from "./home";
import Passion from "./passion";
import Purpose from "./purpose";
import Generator from "./generator/";
import MediumContext from "./medium-context";
import Medium from "./medium";
import Audience from "./audience";
import MakeGenerator from "./make-generator";
import PassionContext from "./passion-context";
import PurposeContext from "./purpose-context";
import HMWContext from "./hmw-context";

// The app is based on a linear sequence of routes - from the current route you can go to previous
// route (i - 1) or the next route (i + 1)
const routes = [
  { key: "home", path: "/", exact: true, Component: Home },
  { key: "passion-context", path: "/passion-context", Component: PassionContext },
  { key: "passion", path: "/passion", Component: Passion },
  { key: "purpose-context", path: "/purpose-context", Component: PurposeContext },
  { key: "purpose", path: "/purpose", Component: Purpose },
  { key: "hmw-context", path: "/hmw-context", Component: HMWContext },
  { key: "generator", path: "/generator", Component: Generator },
  { key: "makegenerator", path: "/make-generator", Component: MakeGenerator },
  { key: "medium-context", path: "/medium-context", Component: MediumContext},
  { key: "medium", path: "/medium", Component: Medium }
];
// Create a mapping from route key -> route object above
const routeMap = routes.reduce((map, route) => {
  map[route.key] = route;
  return map;
}, {});

export {
  Home,
  Medium,
  Audience,
  PassionContext,
  Passion,
  PurposeContext,
  Purpose,
  HMWContext,
  Generator,
  routes,
  routeMap
};

import Home from "./home";
import Passion from "./passion";
import Purpose from "./purpose";
import Generator from "./generator/";
import MediumContext from "./medium-context";
import Medium from "./medium";
import MediaDisclaimer from "./media-disclaimer";
import MediaCards from "./media-cards";
import ImpactContext from "./impact-context";
import Impact from "./impact";
import ImpactCards from "./impact-cards";
import HMWFinal from "./hmw-final";
import PassionContext from "./passion-context";
import PurposeContext from "./purpose-context";
import HMWContext from "./hmw-context";
import LMContext from "./lets-make-context";
import LetsMake from "./lets-make";
import JourneyMap from "./journey-map";
import FinalContext from "./final-context";
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
  { key: "hmw-final", path: "/hmw-final", Component: HMWFinal },
  { key: "journey-map", path: "/journey-map", Component: JourneyMap },
  { key: "medium-context", path: "/medium-context", Component: MediumContext },
  { key: "medium", path: "/medium", Component: Medium },
  { key: "media-disclaimer", path: "/media-disclaimer", Component: MediaDisclaimer },
  { key: "media-cards", path: "/media-cards", Component: MediaCards },
  { key: "impact-context", path: "/impact-context", Component: ImpactContext },
  { key: "impact", path: "/impact", Component: Impact },
  { key: "impact-cards", path: "/impact-cards", Component: ImpactCards },
  { key: "lets-make-context", path: "/lets-make-context", Component: LMContext },
  { key: "lets-make", path: "/lets-make", Component: LetsMake },
  { key: "final-context", path: "/final-context", Component: FinalContext }
];
// Create a mapping from route key -> route object above
const routeMap = routes.reduce((map, route) => {
  map[route.key] = route;
  return map;
}, {});

export {
  Home,
  MediumContext,
  Medium,
  MediaCards,
  MediaDisclaimer,
  ImpactContext,
  Impact,
  ImpactCards,
  PassionContext,
  Passion,
  PurposeContext,
  Purpose,
  HMWContext,
  Generator,
  HMWFinal,
  LMContext,
  LetsMake,
  FinalContext,
  JourneyMap,
  routes,
  routeMap
};

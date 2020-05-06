import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration } from "aurelia-router";

export class App {
  title = "Oileain";
  constructor() {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Oileain";
    config.map([
      {
        route: [""],
        moduleId: PLATFORM.moduleName("./components/navigator"),
        title: "All Islands",
      },
      {
        route: "poi/:id",
        moduleId: PLATFORM.moduleName("./components/poi-detail"),
        name: "pois",
        title: "Island",
      },
      {
        route: "navigator",
        moduleId: PLATFORM.moduleName("./components/home"),
        name: "navigator",
        title: "Navigator",
      },
      {
        route: "region/:id",
        moduleId: PLATFORM.moduleName("./components/navigator"),
        name: "region",
        title: "Region",
      },
    ]);
  }
}

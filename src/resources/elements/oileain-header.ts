import { bindable } from "aurelia-framework";
import { faBars, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";

export class OileainHeader {
  @bindable title: string;
  bars = faBars;
  github = faGithub;
  map = faMap;
  mapMarked = faMapMarked;
}

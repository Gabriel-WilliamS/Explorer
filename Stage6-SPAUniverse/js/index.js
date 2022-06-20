import { Routes } from "./routes.js";

const routes = new Routes();
routes.add("./Explorer/Stage6-SPAUniverse/index.html", "./Explorer/Stage6-SPAUniverse/pages/home.html");
routes.add("./Explorer/Stage6-SPAUniverse/", "Explorer/Stage6-SPAUniverse/pages/home.html");
routes.add("./Explorer/Stage6-SPAUniverse/universe", "Explorer/Stage6-SPAUniverse/pages/universe.html");
routes.add("./Explorer/Stage6-SPAUniverse/exploration", "Explorer/Stage6-SPAUniverse/pages/exploration.html");
routes.add("./Explorer/Stage6-SPAUniverse/404", "Explorer/Stage6-SPAUniverse/pages/404.html");

window.route = () => routes.route();
window.onpopstate = () => routes.handle();
routes.handle();

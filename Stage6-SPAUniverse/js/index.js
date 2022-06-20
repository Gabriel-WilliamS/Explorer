import { Routes } from "./routes.js";

const routes = new Routes();
routes.add("/index.html", "/pages/home.html");
routes.add("/", "/pages/home.html");
routes.add("/universe", "/pages/universe.html");
routes.add("/exploration", "/pages/exploration.html");
routes.add(404, "/pages/404.html");

window.route = () => routes.route();
window.onpopstate = () => routes.handle();
routes.handle();

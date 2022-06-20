export class Routes {
  routes = {};

  add(pathName, path) {
    this.routes[pathName] = path;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    console.log(route);
    fetch(route)
      .then(data => data.text())
      .then(html => {
        let app = document.querySelector("#app");

        app.innerHTML = html;
      });
  }
}

const user = require("./controllers/users");

const routes = app => {
  app.get("/api/me/:id", user.getProfile);
  app.post("/api/login", user.logIn);
  app.post("/api/user", user.createUser);
}

module.exports = routes;

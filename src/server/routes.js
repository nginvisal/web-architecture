const user = require("./controllers/user");

const routes = app => {
  app.get("/api/me", user.getProfile);
  app.post("/api/login", user.logIn);
}

module.exports = routes;

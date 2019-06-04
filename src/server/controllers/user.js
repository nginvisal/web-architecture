module.exports = {
  getProfile: function(req, res) {
    res.send("me");
  },
  logIn: function({ body }, res) {
    res.send("login");
  }
}
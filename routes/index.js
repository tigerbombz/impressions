module.exports = function Route(app, server){
  app.get('/', function(req, res) {
    res.render("index");
  })
};

module.exports = (app) => {

  app.get('/', (req, res) => {
    app.app.controllers.home.exibe_home(app, req,res);
  });
};

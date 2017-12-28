module.exports = (app) => {

  app.get('/noticias', (req, res) => {
    app.app.controllers.noticias.exibe_noticias(app, req, res);
  });
  app.get('/noticia', (req, res) => {
    app.app.controllers.noticias.exibe_noticia(app, req, res)
  });
};

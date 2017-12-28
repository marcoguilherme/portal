module.exports.exibe_noticias = function(app, req, res) {
  var connection = app.config.database();
  var noticiasModel = new app.app.models.NoticiasModel(connection);

  noticiasModel.getNoticias((err, result) => {
    res.render('noticias/noticias', { noticias: result });
  });
}

module.exports.exibe_noticia = function(app, req, res) {
  var connection = app.config.database();
  var noticiasModel = new app.app.models.NoticiasModel(connection);

  var id_noticia = req.query.id_noticia;

  noticiasModel.getNoticia(id_noticia, (err, result) => {
    res.render('noticias/noticia', { noticia: result });
  });
}

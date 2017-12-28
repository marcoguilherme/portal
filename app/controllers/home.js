module.exports.exibe_home = function(app, req, res){

  var connection = app.config.database();
  var noticiasModel = new app.app.models.NoticiasModel(connection);

  noticiasModel.exibe5ultimasNoticias(function(err, result) {
    res.render('home/index', { noticia : result });
  });
}

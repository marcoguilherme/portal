module.exports.form_add_noticia = function(app, req, res){
    res.render('admin/form_add_noticia', { validacao : {}, noticia : {} });
}

module.exports.salvar_noticia = function(app, req, res) {
  var noticia = req.body;

  req.assert('titulo', 'O titulo nao pode ser vazio').notEmpty();
  req.assert('resumo', 'O resumo nao pode ser vazio').notEmpty();
  req.assert('resumo', 'O resumo deve conter entre 10 a 100 caracteres').len(10, 100);
  req.assert('autor', 'O autor nao pode ser vazio').notEmpty();
  req.assert('data_noticia', 'A data nao pode ser vazia').notEmpty().isDate({ format : 'yyyy-mm-dd' });
  req.assert('noticia', 'A noticia nao pode estar vazia').notEmpty();

  var erros = req.validationErrors();

  if(erros) {
    res.render('admin/form_add_noticia', { validacao : erros , noticia : noticia });
    return;
  }

  var connection = app.config.database();
  var noticiasModel = new app.app.models.NoticiasModel(connection);

  noticiasModel.salvarNoticia(noticia, (err, result) => {
    res.redirect('/noticias');
  });
}

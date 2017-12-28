function NoticiasModel(connection) {
  this._connection = connection;
}

NoticiasModel.prototype.getNoticias = function(callback) {
  this._connection.query('select * from noticias order by data_noticia desc', callback);
}

NoticiasModel.prototype.getNoticia = function(id_noticia, callback) {
  this._connection.query('select * from noticias where id_noticia = ' + id_noticia, callback);
}

NoticiasModel.prototype.salvarNoticia = function(noticia, callback) {
  this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasModel.prototype.exibe5ultimasNoticias = function(callback) {
  this._connection.query('select * from noticias order by data_noticia desc limit 5', callback);
}

module.exports = () => {
  return NoticiasModel;
}

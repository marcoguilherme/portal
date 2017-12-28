var conn = require('mysql');

var connMySQL = () => {
    return connection = conn.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias'
    });
}

module.exports = () => {
    return connMySQL;
}

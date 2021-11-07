'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'projeto',
  port: 3306,
  database : 'projeto_autoclub'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Banco de dados conectado!");
});
module.exports = dbConn;
const mysql = require("mysql");
const sshConnection = require("./ssh");

const dbConfig = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "P$ssw0rd123",
  database: "mohamed",
};

const dbConnection = mysql.createConnection(dbConfig);
dbConfig.stream = sshConnection;

module.exports = dbConnection;

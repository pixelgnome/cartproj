const Sequelize = require("sequelize");

const sequelize = new Sequelize('node-complete', 'root', 'turiddu!', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

// // Connect to mysql
// const mysql = require('mysql2');

// // Create a connection pool
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'turiddu!'
// });

// module.exports = pool.promise();

require('dotenv').config();
const mysql = require('mysql2/promise');
let connection;

module.exports = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database
})
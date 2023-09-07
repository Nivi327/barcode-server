const mysql2 = require('mysql2');

const connection = mysql2.createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'test'
});

module.exports = connection;
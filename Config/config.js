const mysql2 = require('mysql2');

const connection = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

module.exports = connection;
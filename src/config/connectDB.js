const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'damanop',
    password: 'damanop',
    database: 'damanop',
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: '92lottery'
// });

export default connection;
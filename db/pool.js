const { Pool } = require('pg');

module.exports = new Pool({

    hostname: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT,

});
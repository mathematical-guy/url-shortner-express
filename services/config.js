const path = require('path')
const dotnev_path = path.resolve(__dirname, '../.env');
const dotenv = require('dotenv')

console.log(dotnev_path);
dotenv.config({path: dotnev_path})
console.log(process.env.DB_PASS)

const config = {
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
    },
    listPerPage: 10,
  };

console.log(config);
module.exports = config;
const path = require('path')
const dotnev_path = path.resolve(__dirname, '../.env');
const dotenv = require('dotenv')
const mysql = require('mysql');

let connection = mysql.createConnection(config.db)

console.log(`Created connection ${connection}`)

connection.connect();
 
connection.query('SELECT * FROM url_management_shortenedurl;', function (error, results, fields) {
  if (error) {
    console.error(error);
    return
  };
  for (let index = 0; index < results.length; index++) {
    const element = results[index];
    console.log(element.name);
  }
//   console.log('The solution is: ', results);
});


connection.end();
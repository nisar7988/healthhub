
const mysql = require('mysql'); // Use the promise version of mysql2

const connect = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
      user: '3YDiGUqi5GmnTi4.root',
      port:"4000",
      password: '4M0KKncpLZUEiadQ',
      database: 'healthhub',
      ssl:{
        rejectUnauthorized:false
      }
    });
    console.log('Connected to the MySQL database');
    return connection; // Return the connection object for reuse
  } catch (err) {
    console.error('Database connection error', err);
    throw err; // Rethrow the error after logging it
  }
};

module.exports = connect;

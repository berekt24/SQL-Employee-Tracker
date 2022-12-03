const mysql = require('mysql2');

const sqlConnect = mysql.createConnection(
    {
      host: 'localhost',
      
      user: 'root',
  
      password: '19971024',
      database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
  );

  module.exports = sqlConnect
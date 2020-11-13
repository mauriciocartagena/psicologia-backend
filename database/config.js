const mysql = require('mysql');


const dbConnection = () => {

    const connection = mysql.createConnection({
        host     : process.env.DB_CNN,
        user     : process.env.DB_USER, 
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE, 
        port     : process.env.DB_PORT,
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    });
     connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
       
        console.log('connected as id ' + connection.threadId);
    });
}

module.exports = {
    dbConnection
}

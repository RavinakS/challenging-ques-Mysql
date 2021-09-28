const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ravina@123',
    database: 'pets',
    port: 3306
});

// db.connect(err => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("* * Connected!! * *");
//     }
// })

db.query('show tables', function(err, table){
    console.log(table);
})
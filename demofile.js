const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'roor',
    password: 'ravina@123',
    database: 'pets'
});

db.connect(err => {
    if(err){
        console.log(err);
    }
    console.log("* * Connected!! * *");
})
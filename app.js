const express = require('express');
const mysql = require("mysql");

 const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'zanele@97',
    database : 'dlonra_academy'
 });
 db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log("connected to database")
 })
const app = express();

app.listen('3000', () => {
    console.log('server started on port 4000');
});
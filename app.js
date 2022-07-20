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

app.get('/adduser1',(req, res) =>{
    let user = {email:"zandilebele@gmail.com", name:"zandile", surname:"bele"};
    let sql = "INSERT INTO tusers SET";
    let query = db.query(sql,user,(err, result) => {
        if(err) throw err;
        console.log(result)
        res.send("user successfully added")
    })
})

app.listen('3000', () => {
    console.log('server started on port 4000');
});
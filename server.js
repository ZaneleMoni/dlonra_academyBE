const express = require('express');
const cors = require('cors');
const mysql = require("mysql");
const app = express();

//middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

var corsOptions = {
    origin: "https://localhost:8002"
}

//port
const PORT = process.env.PORT || 8000

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
//router
const router = require('./routes/user.routes')
app.use('/api/users', router)

//Testing
app.get('/users', (req, res) =>{
    let sql = 'SELECT * FROM tusers';
    let query = db.query(sql, (err, results) => {
     if(err) throw err;
     console.log(results)
     res.json({results})
   });
 });

 app.post('/users',(req, res) =>{
    var email=req.body.email
    var name=req.body.name;
    var surname=req.body.surname;

    connection.query("INSERT INTO `tusers` (email,name,surname) VALUES (?)",email.toString(), name.toString(),surname.toString(), function(err, result){
        if(err) throw err;
            console.log("User Inserted");
        });
    res.send();
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
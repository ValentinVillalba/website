const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const url = require("url");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('./base.db', sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);

    console.log("cheto mal");
});

app.use(bodyParser.json());

//post
app.post("/test", (req, res) =>{
    try{
        const {autor, prueba} = req.body;
        sql = "INSERT INTO test(autor, prueba) VALUES (?,?)";
        db.run(sql, [autor, prueba], (err) =>{
            if (err) return res.json({status:300, success:false, error:err});

            console.log("CHETO PIBE: ", autor, prueba);
        });
        return res.json({
            status: 200,
            success: true,
        });
    }
    catch (error){
        console.log("ERROR");
        return res.json({
            status: 400,
            success: false,
        });
    }
});

//get
app.get("/test", (req, res) =>{
    sql = "SELECT * FROM test";
    try{
        db.all(sql, [], (err, rows) =>{
            if (err) return res.json({status:300, success:false, error:err});

            if (rows.length < 1) return res.json({status:300, success:false, error:"vacio"});

            return res.json(rows);
        });
    }
    catch (error){
        console.log("ERROR");
        return res.json({
            status: 400,
            success: false,
        });
    }
});

app.listen(3000);
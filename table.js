const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('./base.db', sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);

    console.log("cheto mal");
});

const sqlTabla = "CREATE TABLE test(ID INTEGER PRIMARY KEY, autor, prueba)";
db.run(sqlTabla);

//CONST
// const sqlNuevoMensaje="INSERT INTO mensajes(autor, mensaje) VALUES(?,?)";
//const sql="DELETE FROM mensajes WHERE autor='god';";
// const sqlShow="SELECT * FROM mensajes";

//DB
// db.run(sqlNuevoMensaje, ["xd","lol"], (err) =>{
//     if (err) return console.error(err.message);
// });

// db.run(sqlShow);

// db.all(sqlShow, [], (err, rows) =>{
//     if (err) return console.error(err.message);

//     rows.forEach(row =>{
//         console.log(row);
//     })
// })

// //CERRAR DATABASE
// db.close((err) =>{
//     if (err) return console.error(err.message);
// })
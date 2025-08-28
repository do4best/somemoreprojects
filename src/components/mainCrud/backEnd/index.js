import * as http from "node:http";
import sqlite3 from "sqlite3";
const db = new sqlite3.Database("database.db", (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Connected to the SQLite database.");
});
db.run(
    `CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ProductName TEXT,
    SupplierId INTEGER,
    CategoryId INTEGER,
    Unit TEXT,
    Price REAL`,(err) =>{
        if(err){
            console.log(err.message);
        }
        console.log("Table created successfully.");
    });
const search = (callback) => {
    db.all("SELECT * FROM Products", (err, rows) => {
        if (err) {
            console.error(err.message);
        }else{
        callback(rows);}
    });
}
// const insertDb = db.prepare(`INSERT INTO Products (ProductName, SupplierId, CategoryId, Unit, Price) VALUES (?, ?, ?, ?, ?)`,
//     (err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     console.log("Data inserted successfully.");
//     });
// const deleteDb = db.prepare(`DELETE FROM Products WHERE id = ?`,
//     (err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     console.log("Data deleted successfully.");
//     });
// const updateDb = db.prepare(`UPDATE Products SET ProductName = ?, SupplierId = ?, CategoryId = ?, Unit = ?, Price = ? WHERE id = ?`,
//     (err)=>{
//     if(err){
//         console.log(err.message);
//     }else {
//         console.log("Data updated successfully.");
//     }
//     }
// )
// const modifyData = db.prepare(`UPDATE Products SET ProductName = ?, SupplierId = ?, CategoryId = ?, Unit = ?, Price = ? WHERE Productid = ?`,
//     (err)=>{
//     if(err){
//         console.log(err.message);
//     }else {
//         console.log("Data modifyied successfully.");
//     }
//     },)

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    search((result)=>{
        res.end(JSON.stringify(result));
        res.end()

    })
    // if (req.method === 'POST') {
    //     const body = "";
    //     req.on('data', (chunk) => {
    //         body.push(chunk);
    //     }).on('end', () => {
    //         const parsedBody = JSON.parse(body);
    //
    //         const {ProductName, SupplierId, CategoryId, Unit, Price} = JSON.parse(parsedBody);
    //         insertDb.run(ProductName, SupplierId, CategoryId, Unit, Price);
    //         console.log("Data inserted successfully.");
    //     });
    //     if (req.method === 'DELETE') {
    //         let body = ""
    //         req.on('data', (chunk) => {
    //             body += chunk;
    //         }).on('end', () => {
    //             const parsedBody = JSON.parse(body);
    //             const {id} = JSON.parse(parsedBody);
    //             deleteDb.run(id);
    //             console.log("Data deleted successfully.");
    //         });
    //     }
    // }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

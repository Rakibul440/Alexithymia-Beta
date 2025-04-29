import express from "express";
import mysql from "mysql"
import cors from "cors"

const app = express();
const port = 8800

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Baccha@19",
    database : "alexithymia"
})

app.use(express.json())  //able to sent data from clint side
app.use(cors()) //able to sent data from backend to clint side 

app.get("/",(req,res)=>{
    res.json("Hello This is from backend")
})
app.get("/explore",(req,res)=>{
    const q = "SELECT * FROM alexithymia.feelings"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.post("/explore",(req,res)=>{
    const q = "INSERT INTO feelings (`title`,`expression`,`author`,`cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.expression,
        req.body.author,
        req.body.cover
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.delete("/explore/:id",(req,res)=>{
    const eventId = req.params.id
    const q = "DELETE FROM feelings WHERE id = ?"

    db.query(q,[eventId],(err,data)=>{
        if (err) return  res.json(err)
        return res.json("Event has been Deleted")
    })
})

app.put("/explore/:id",(req,res)=>{
    const eventId = req.params.id
    const q = "UPDATE feelings SET `title` = ?, `expression` = ?, `author` = ?, `cover` = ? WHERE id = ?"
    const values = [
        req.body.title,
        req.body.expression,
        req.body.author,
        req.body.cover
    ]

    db.query(q,[...values,eventId],(err,data)=>{
        if (err) return res.json(err)
        return res.json("Event has been updated")
    })
})
app.listen(port,()=>{
    console.log(`Server is running on -http://localhost:${port}`);
})
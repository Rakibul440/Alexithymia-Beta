import express from "express";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config()
import mongoose from "mongoose";

import userRoutes from "./routers/userRoutes.js";

const app = express();

app.set("port",process.env.PORT || 3000)

app.use(express.json())  
app.use(cors()) 

app.use(userRoutes)


;(async()=>{
    
    try {
        const connectionDB = await mongoose.connect(process.env.MONGODB_URI)
        .then(()=>{
                app.listen(app.get('port'),()=>{
                console.log(`Server is running on -http://localhost:${app.get('port')}`);
                })
        })
        .catch((error)=>{console.log(`DATABASE connection FAILED : ${error}`)})
        console.log(`MONGO Connected DB HOST : ${connectionDB.connection.host}`)
        
    } catch (error) {
        console.log(`ERROR OCCURED DURING DATABASE CONNECTION : \n-> ${error}`)
    }

})();

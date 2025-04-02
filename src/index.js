import dotenv from "dotenv";
import { app } from "./app.js";
import {connectDB} from "./db/index.js"

dotenv.config()


//Database Connection
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`server is running at post ${process.env.PORT}`);
        })
    })
    .catch((err) =>{
        console.log("MongoDB Connection Failed !!", err);
    })
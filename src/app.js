import express from "express"
import cors from "cors"

const app = express();

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))

//fix the size of json
app.use(express.json({limit: "16kb"}))

//for encoding url
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))


//hotel 1 routes import
import hotel1Router from "./routes/hotel1.routes.js"

//hotel1 routes declaration
app.use("/api/v1/hotel1", hotel1Router)


export {app}



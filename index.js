import express from 'express'
const app = express()

import dotenv from "dotenv"
dotenv.config()


import mongoose from 'mongoose'

//initial connection to mongoDB
const connect = () => {
    try {
        mongoose.set("strictQuery", false)
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongoDB");
    }
    catch (error) {
        throw (error)
    }
}


//check if connected or not, and take action acordingly
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB down!!");
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB up!")
})




app.listen(8800, () => {
    connect()
    console.log("Connected to backend!")
})
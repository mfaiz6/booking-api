import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"

import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()


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




//to communicate via json objects with api
app.use(express.json())

//middlewares to take to respective routes

app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)


// error handling middleware
app.use((err, req, res, next) => {
    const errStatus = err.status || 500
    const errMessage = err.message || "Something went wrong!"
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    })
})




app.listen(8800, () => {
    connect()
    console.log("Connected to backend!")
})
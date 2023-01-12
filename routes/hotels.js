import express from 'express'
import { createHotel, deleteHotel, getHotels, getHotel, updateHotel } from '../controllers/hotel.js'

const router = express.Router()


//Create a hotel
router.post("/", createHotel)


//Update a hotel
router.put("/:id", updateHotel)


//Delete a hotel
router.delete("/:id", deleteHotel)


//Get a hotel
router.get("/:id", getHotel)


//Get all hotels
router.get("/", getHotels)


export default router
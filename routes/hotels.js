import express from 'express'
import { createHotel, deleteHotel, getHotels, getHotel, updateHotel, getByCity, countByType } from '../controllers/hotel.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()


//Create a hotel
router.post("/", verifyAdmin, createHotel)


//Update a hotel
router.put("/:id", verifyAdmin, updateHotel)


//Delete a hotel
router.delete("/:id", verifyAdmin, deleteHotel)


//Get a hotel
router.get("/find/:id", getHotel)


//Get all hotels
//Get featured hotels
router.get("/", getHotels)

//get number of hotels of diff. locations
router.get("/countByCity", getByCity)


//get number of hotels/properties by type
router.get("/countByType", countByType)







export default router
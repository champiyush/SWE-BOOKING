import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
 // getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
//import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();
//Create
router.post("/",createHotel);
//UPDATE
router.put("/:id",updateHotel);
//DELETE
router.delete("/:id",deleteHotel);

//Get
router.get("/:id",getHotel);
//Get all
router.get("/",getHotels);

export default router;
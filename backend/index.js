import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import connectDB from './db/connectdb.js';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from "cookie-parser";
import {join} from 'path';



const app = express();
const port = process.env.PORT||8800;

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';



mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
//middlewares

app.use(bodyParser.urlencoded({ extended: true }));
//used to parse the incoming requests with JSON payloads and is based upon the bodyparser
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
});

app.listen(port, () => {
    connectDB(DATABASE_URL);
    console.log("Connected to backend.");
});

import mongoose from "mongoose";
// const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    console.log("MongoDB connection URI:", process.env.CONNECTION_URL);
    const conn = await mongoose.connect(process.env.CONNECTION_URL, {
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;

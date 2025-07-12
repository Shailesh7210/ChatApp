import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // just in case it's not loaded yet

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
  }
};
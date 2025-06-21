import mongoose from "mongoose";
import { MONGODB_URI, NODE_ENV } from "../config/envConfig.js";

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI not found in environment file");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`✅ Connected to MongoDB in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("❌ DB Connection Error:", error);
    process.exit(1);
  }
};

export default connectToDatabase;

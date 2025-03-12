import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";
import process from "process";

if (!DB_URI) {
  throw new Error(
    "Please define the MONGODB_URI variable inside .env.<development/production>.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error: Connecting to database", error);
    process.exit(1);
  }
};

export default connectToDatabase;

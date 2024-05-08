import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_DB_URI } = process.env;

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("Connnected to mongoDB");
  } catch (error) {
    console.log("Error while connecting! ", error.message);
  }
};

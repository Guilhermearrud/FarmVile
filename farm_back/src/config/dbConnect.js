import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin123@lirafarmdatabase.2fg9j4h.mongodb.net/FarmLira?retryWrites=true&w=majority&appName=LiraFarmDataBase"
    );
    console.log("Connected to the database");
    return mongoose.connection;
  } catch (error) {
    console.error("Connection to the database failed", error);
  }
}

export default connectDB;
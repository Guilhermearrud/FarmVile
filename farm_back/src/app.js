import express from "express";
import cors from "cors";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDB();

connection.on('error', err => {
  logError(err);
});

connection.once("open", () => {
  console.log("Connected to the database");
})

const app = express();
app.use(cors()); 
routes(app);

export default app;

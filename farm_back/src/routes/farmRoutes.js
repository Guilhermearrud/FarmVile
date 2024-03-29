import express from "express";
import FarmController from "../controllers/farmController.js";

const routes = express.Router();

routes.get("/farms", FarmController.getAllFarms);
routes.post("/farm/create", FarmController.createFarm);
routes.get("/farms/:id", FarmController.getFarmById);
routes.delete("/farm/delete", FarmController.deleteFarm);

export default routes;
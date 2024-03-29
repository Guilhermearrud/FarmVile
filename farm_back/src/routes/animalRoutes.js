import express from "express";
import AnimalController from "../controllers/animalController.js";

const routes = express.Router();

routes.get("/animals", AnimalController.getAllAnimals);
routes.get("/animals/:id", AnimalController.getAnimalById);
routes.post("/animals/create", AnimalController.createAnimal);
routes.get("/animals/type/:type", AnimalController.getAnimalByType);
routes.put("/animals/update-status/:id", AnimalController.updateAnimalStatus);
routes.delete("/animals/delete/:id", AnimalController.deleteAnimal);

export default routes;
import { animal } from "../models/Animal.js";

class AnimalController {
  static async getAllAnimals(req, res) {
    try {
      const animals = await animal.find({});
      res.status(200).json(animals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createAnimal(req, res) {
    try {
      const newAnimal = await animal.create(req.body);
      res
        .status(201)
        .json({ message: "Animal created successfully", animal: newAnimal });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAnimalById(req, res) {
    try {
      const id = req.params.id;
      const selectedAnimal = await animal.findById(id);
      res.status(200).json(selectedAnimal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getAnimalByType(req, res) {
    try {
      const type = req.params.type;
      const selectedAnimal = await animal.find({ type: type });
      res.status(200).json(selectedAnimal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateAnimalStatus(req, res) {
    try {
      const id = req.params.id;
      const animalCurrentStatus = await animal.findById(id);
      console.log('animalCurrentStatus', animalCurrentStatus);

      if (animalCurrentStatus.status == "Deceased") {
        res
          .status(400)
          .json({
            message:
              "It is not possible to change status of a deceased animal.",
          });
      } else {
        await animal.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Animal status updated successfully" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteAnimal(req, res) {
    try {
      const id = req.params.id;
      await animal.findByIdAndDelete(id);
      res.status(200).json({ message: "Animal deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default AnimalController;

import farm from "../models/Farm.js";
import { animal } from "../models/Animal.js";

class FarmController {
  static async getAllFarms(req, res) {
    try {
      const farms = await farm.find({});
      res.status(200).json(farms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createFarm(req, res) {
    const newFarm = req.body;
    try {
      const selectedAnimal = await animal.findById(newFarm.animals);
      const completeFarm = { ...newFarm, animals: { ...selectedAnimal._doc } };
      const createdFarm = await farm.create(completeFarm);
        res.status(201).json({ message: "Farm created successfully", farm: createdFarm });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getFarmById(req, res) {
    try {
      const id = req.params.id;
      const selectedFarm = await farm.findById(id);
      res.status(200).json(selectedFarm);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteFarm(req, res) {
    try {
      const id = req.params.id;
      await farm.findByIdAndDelete(id);
      res.status(200).json({ message: "Farm deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default FarmController;

import mongoose from "mongoose";
import { animalSchema } from "./Animal.js";

const farmSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    constructionDate: {
        type: Date,
        required: true,
    },
    history: {
        type: String,
        required: true,
    },
    pictureUrl: {
        type: String,
        required: true,
    },
    animals: animalSchema,
});

const farm = mongoose.model('Farms', farmSchema);

export default farm;

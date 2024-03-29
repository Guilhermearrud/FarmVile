import express from "express";
import animals from "./animalRoutes.js"
import farms from "./farmRoutes.js";

const routes = (app) => {

    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // Replace with your Angular app's origin
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(express.json(), animals, farms);
};

export default routes;
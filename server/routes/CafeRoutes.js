import express from "express";
import { Cafe } from "./models/Cafe";
const router = express.Router();

// router
router.get("/", (res, req) => {
  Cafe.find()
    .then((cafes) => {
      res.json(cafes);
    })
    .catch((err) => console.log(err));
});

import express from "express";
const router = express.Router();

// create Menu Cafe
router.get("/menu", (req, res) => {
  res.status(200).send("Ini Halaman menu!");
});

router.get("/menu/create", (req, res) => {});

export default router;

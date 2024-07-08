import express from "express";
import {
  userDelete,
  userLogin,
  userRegister,
  userUpdate,
} from "../controllers/User.js";

const userRoute = express.Router();

// Login
userRoute.get("/login", (req, res) => {
  res.send("Halaman Login");
});

userRoute.post("/login", userLogin);

// Register
userRoute.get("/register", (req, res) => {
  res.send("Halaman Register");
});

userRoute.post("/register", userRegister);

// Update
userRoute.get("/update/:id", (req, res) => {
  res.send("Halaman Update");
});

userRoute.put("/update/:id", userUpdate);

// Delete

userRoute.delete("/delete/:id", userDelete);

export default userRoute;

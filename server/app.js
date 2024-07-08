import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config/database.js";
import userRoute from "./src/routes/User.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// User Routes
app.use("/", userRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(
      "Selamat!!!, anda telah berhasil menjalin hubungan dengan database 😋"
    );
    app.listen(PORT, () => {
      console.log(`server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error: ", err);
  });

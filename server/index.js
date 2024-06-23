import express from "express";
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.status(200).send("HEALTHY");
  console.log("server is running at port: https: " + PORT);
});

app.listen(PORT, () => {
  console.log(`server is running at port: https: ${PORT}`);
});

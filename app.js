import express from "express";
import path from "node:path";
// import upload from "./middleware/fileUpload.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));




app.get("/", (req, res) => {
  res.send("Working on feedback collecetor Server");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});

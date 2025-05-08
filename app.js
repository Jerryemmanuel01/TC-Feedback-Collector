import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Working on feedback Server");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});

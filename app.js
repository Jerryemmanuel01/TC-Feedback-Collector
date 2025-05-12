import express from "express";
import { router } from './routes/feedbackRoutes.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/feedback', router)

app.get("/", (req, res) => {
  res.send("Working on feedback collecetor Server");
});

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});

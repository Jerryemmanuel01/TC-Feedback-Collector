import fs from "fs";
import path from "path";

const localDataPath = path.join("data", "feedbacks.json");

export const saveFeedback = (req, res) => {
  const { name, email, message } = req.body;
  const file = req.file;

  const newFeedback = { name, email, message, file, CreatedAt: new Date() };

  let feedbacks = [];
  if (fs.existsSync(localDataPath)) {
    feedbacks = JSON.parse(fs.readFileSync(localDataPath));
  }

  feedbacks.push(newFeedback);
  fs.writeFileSync(localDataPath, JSON.stringify(feedbacks, null, 2));

  res.status(201).json({
    status: 201,
    message: "Feedback saved successfully.",
    error: false,
  });
};

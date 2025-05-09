const fileUpload = require('../utils/fileUpload')
const feedbackModel = require('../models/feedbackModel')

function handleFeedbackSubmission(req, res) {
  // This will be changed by Phiyin❤️ and Basit

  const { name, email, message } = req.body;
  const image = req.file;

  const feedbackData = feedbackModel.createFeedback(name, email, message, image.filename)
  console.log(feedbackData)
  // Logic to save the feedback to a local file (Phiyin's task)

  res.status(200).json({ message: 'Feedback received and saved!'});
}

module.exports = { handleFeedbackSubmission };

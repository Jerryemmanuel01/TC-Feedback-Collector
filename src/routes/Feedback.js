const express = require('express');
const router = express.Router();
const multer = require('multer'); // Require multer here
const upload = require('../utils/fileUpload')

const feedbackController = require('../controllers/FeedbackController');
const validator = require('../middleware/validator');

router.post('/', upload.single('image'), validator.validateFeedback, feedbackController.handleFeedbackSubmission);

module.exports = router;

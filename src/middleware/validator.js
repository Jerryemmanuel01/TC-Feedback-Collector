function validateFeedback(req, res, next) {
    // This will be changed by Ade ✨
  // Basic validation example (improve this)
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }  
    next();
  }
  ko
  module.exports = { validateFeedback };
  
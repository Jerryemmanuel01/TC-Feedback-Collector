export const validateFeedback = (req, res, next) => {
    const { name, email, message } = req.body;
    const file = req.file;
  
    // Validate name
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Name is required and must be a string' });
    }
  
    // Validate email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'A valid email is required' });
    }
  
    // Validate message
    if (!message || typeof message !== 'string' || message.length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters long' });
    }
  
    // Validate image (file)
    if (!file) {
      return res.status(400).json({ error: 'Image is required' });
    }
  
    next(); 
  };
// importing all the reqired modules
import express from 'express'
import { validateFeedback } from '../middleware/validateFeedback.js'
import { saveFeedback } from '../controllers/SaveFeedback.js'

// initialize router
export const router = express.Router()

// A post route that include the path, the validator middleware and the feedback controller
router.post('/', validateFeedback, saveFeedback, (req, res) => {
    res.send('Thank you.')
})

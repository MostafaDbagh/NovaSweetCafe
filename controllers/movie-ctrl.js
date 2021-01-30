
const Movie = require('../models/review-model')


createReview = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No message was sent',
        })
    }
        
    const movie = new Movie(body)

    if (!movie) {
        return res.status(400).json({ success: false, error: err })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'message  sent',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'no message!',
            })
        })
}


     

module.exports = {
    createReview
  
}

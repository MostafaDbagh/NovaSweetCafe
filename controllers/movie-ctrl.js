
const Movie = require('../models/review-model')


createReview = (req, res) => {
    const body = req.body
console.log(body)
    if (!body) {
        console.log('not body')
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


     
getReview = (req,res)=>{
    res.send('hello world')
}
module.exports = {
    createReview,getReview
  
}

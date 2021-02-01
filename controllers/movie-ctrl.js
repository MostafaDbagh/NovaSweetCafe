
const Review = require('../models/review-model')
const Subscribe = require('../models/subscribe-model')

createReview = (req, res) => {
    const body = req.body

    if (!body) {
        console.log('not body')
        return res.status(400).json({
            success: false,
            error: 'No message was sent',
        })
    }
      
    const review = new Review(body)
  
    if (!review) {
        return res.status(400).json({ success: false, error: err })
    }

    review
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: Review._id,
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


     
createSubscibe = (req,res)=>{
    const body = req.body
 console.log(body)
    if (!body) {
        console.log('no body')
        return res.status(400).json({
            success: false,
            error: 'No message was sent',
        })
    }
      
    const subscribe = new Subscribe(body)
    console.log(subscribe)

    if (!subscribe) {
        
        return res.status(400).json({ success: false, error: err })
    }

    subscribe
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: subscribe._id,
               
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
    createReview,createSubscibe
  
}

const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        taste:{type:String,required:true},
         deliverytime:{type:Number,required:true},
        money:{type:String,required:true},
         clean:{type:Number,required:true},
        notes:{type:String,required:true},
    }
)
// module.exports=mongoose.model('users',UserSchema)
module.exports=mongoose.model('reviews',ReviewSchema)


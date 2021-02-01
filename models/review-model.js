const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
       email:{type:String ,required:true},
       msg:{type:String,required:true}
    }
)
// module.exports=mongoose.model('users',UserSchema)
module.exports=mongoose.model('reviews',ReviewSchema)


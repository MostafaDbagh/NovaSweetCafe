const mongoose = require('mongoose')

const SubscribeSchema = new mongoose.Schema(
    {
    
       email:{type:String ,required:true},
    
    }
)

module.exports=mongoose.model('subscribe',SubscribeSchema)

const User = require('../model/customer-model');


createUser = (req,res)=>{
    const body = req.body;
    const newUser = new User(body)
    newUser.save()
           .then(()=>{
               return res.status(200).json(
                   {
                       message:'user Created'

                   }
               )
           }
           )
}

module.exports = {createUser};
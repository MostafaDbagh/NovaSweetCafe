
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path')
const cors =require('cors')
const app = express();
const userRoute = require('./routes/customer-route')
const port = process.env.PORT ||3001;
mongoURI='mongodb+srv://safi:35064612@cluster0-ags3s.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoURI||'mongodb://127.0.0.1:27017/fuckoff',{useNewUrlParser:true,useUnifiedTopology: true})
.catch((err)=>{
    console.log(`an error was occure ${err}`)
})
mongoose.connection.on('connected',()=>{
    console.log('you are connecting to database')
})
mongoose.connection.on('error',(err)=>{
    console.log('connection failed to database',err.message)
})

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())


app.use('/api',userRoute)
if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
}

app.listen(port,()=>{
    console.log(`we are listening to port ${port}`)
})



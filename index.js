const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const apiPort = 3005


const router = require('./routes/review-route')


mongoURI='mongodb+srv://safi:35064612@cluster0-ags3s.mongodb.net/review?retryWrites=true&w=majority'
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


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use('/api',router)


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
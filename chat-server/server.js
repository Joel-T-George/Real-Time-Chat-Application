require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose');
const User =  require('./models/User')
console.log()
const uri = process.env.DATABASE_URL;

mongoose.connect(uri).then( 
  ()=> console.log("Database successfully connected"),
  (e) => console.log(e)
)

const app = express()

app.get('/', function (req, res) {
  res.send('Chat Server activiated')
})
app.get('/', function (req, res) {
    res.send('Chat Server activiated')
})
app.listen(9000)

require("dotenv").config()

const express = require('express')
const mongoose = require('mongoose');
const User =  require('./models/User')

const URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const app = express()
app.use(express.json())

mongoose.connect(URL).then( 
  ()=> console.log("Database successfully connected"),
  (e) => console.log(e)
)
const UsersRouter = require('./routes/User')
app.use('/Users', UsersRouter)

app.listen(PORT)

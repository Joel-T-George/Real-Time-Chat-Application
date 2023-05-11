require("dotenv").config()
const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');

uri = process.env.DATABASE_URL
const app = express()

app.get('/', function (req, res) {
  res.send('Chat Server activiated')
})
app.get('/', function (req, res) {
    res.send('Chat Server activiated')
})
app.listen(9000)

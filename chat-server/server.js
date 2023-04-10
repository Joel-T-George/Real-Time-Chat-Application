const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Chat Server activiated')
})
app.get('/', function (req, res) {
    res.send('Chat Server activiated')
})
app.listen(9000)

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8" , function(err, data) {
//     console.log(data);
// })

// ====================================================================
// ====================================================================


const express = require('express')
const app = express()

// route handlers
// route
//GET method
app.get('/', function(req, res) {
  res.send('Hello World!!!')
})

//post
app.post('/', function(req, res) {
    res.send('Hello World from the post endpioint')
  })

//get
app.get('/contact', function(req, res) {
    res.send('Hello Everyone you all can contact me hear')
  })
  
// Delete
app.delete('/', function(req, res) {
res.send('All is Deleted')
})

app.listen(3001); // which port
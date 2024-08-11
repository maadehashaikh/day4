const express = require('express')
const app = express(); 

app.use(function(req,res,next){
  console.log('middleware chala');   
  next();
});

app.use(function(req,res,next){
  console.log('middleware chala aik or bar');   
  next();
});


app.get('/', function (req, res) { 
  res.send('I am maadeha ');
})

app.get('/about', function (req, res) { 
  res.send('I am about page !!');
})


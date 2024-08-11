const express = require('express')
// is line say express ki sari chezain nikal kar aik express variable mai aa gai hain so that we can use it and by default express is a function  

const app = express(); // app kion kay hm app create kar skty hain 

// in 2 lines kay bad we can create routes (routes hain kia ? website kay name kay bad jo bh add ho are routes jaisy domain kay bad / mai .profile laga hua ho so that this is the route )

// app.use (); 
// jitni bh request server ko jain ge us say pehly is ko chala do bus kion kay shyd hmy bech mai kuch kam ho middleware say , do remeber app.use mai hamesha aik function aay ga and woh fun 3 chezain expect karay ga /about dayna and aik server ny usko accept kia h and ab woh app.use p jay ge 

// => user ny aik request bheji h => woh server ko gai h by express ka code => and ab woh middleware p aa gai h 


app.use(function(req,res,next){
  console.log('middleware chala');   // simple bat karty hain app.use ki to woh hmy 
  next();
})


app.get('/', function (req, res) {  //app say get and is mai we use sab say pehly route and then we write request handler => request handler middleware hota h and yeh hamesha aik function hota h so 
  res.send('I am maadeha ')
})

// is app.get mai no middleware is involved 


app.get('/profile', function (req, res) { 
  res.send('ap profile route hain and we use nodemon to make you automate');
})

app.listen(3000) // port kia hota h ? 


// actually nodemon h kia bar bar hmara server off kar kay on karny p he changes reflect ho rhy thy ab nodemon ko install karny say hua yeh kay we have seen kay kaisy changes reflect karty he hmara server reload karny p changes dikh rhy hain ! we don't need to off and on the server again 




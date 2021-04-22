const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/ourdata');
mongoose.Promise = global.Promise;
//add front end
app.use(express.static('public'));
//add Express parser to parse the data sent or received from the database.
app.use(express.json());
//look for api.js file where get,post and other stuff are defined
app.use('/api',require('./router/api'));
// for errors and stuff
app.use(function(err,req,res,next){res.status(422).send({error: err.message});});

app.listen(process.env.port || 4000, function(){console.log('now listening for requests');});
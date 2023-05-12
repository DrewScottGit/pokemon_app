// require modules

const express = require('express');

// create express app

const app = express();

const port = 3000

const pokemon = require('./models/pokemon.js');

// routes

app.get('/', function(req,res){
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon/', function(req,res){
    res.send(pokemon)
})







app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})
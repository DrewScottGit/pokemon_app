// require modules

const express = require('express');

// create express app

const app = express();

const port = 3000

const pokemon = require('./models/pokemon.js');

// middleware

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// routes

app.get('/', function(req,res){
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon/', function(req,res){
    res.render('Index', {pokemon: pokemon})
})

app.get('/pokemon/:id', (req,res) =>{
    res.render ('Show', { pokemon: pokemon[req.params.id]})
})







app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})
// require modules

const express = require('express');

// create express app

const app = express();

const mongoose = require('mongoose');

const pokemon = require('./models/pokemon.js');

require('dotenv').config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true });

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


// middleware

app.use((req, res, next)=>{
    console.log('I run for all routes');
    next()
})

app.use(express.urlencoded({ extended: false}));


app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// routes

app.get('/', function(req,res){
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req,res)=>{
    pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {pokemon: allPokemon});
    });
});


app.get('/pokemon/new', function(req,res){
    res.render("../views/New");
});

app.post('/pokemon', (req,res) =>{
    pokemon.create(req.body, (error, createdPokemon) =>{
        res.redirect('/pokemon');
    });
});

app.get("/pokemon/:id", (req, res)=> {
    pokemon.findByID(req.params.id, (err, foundPokemon)=>{
        res.render('Show', { Pokemon: foundPokemon});
    });
});


app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})
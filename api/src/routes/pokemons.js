const { default: axios } = require('axios');
const router = require('express').Router();
const { Pokemons, Types } = require('../db');
const { getAllPokemons, postPokemon, getPokemonById, getAllPokemonsByName } = require('../controllers');
const { response } = require('express');



router.get('/', async function(req, res, next){

  const name = req.query.name;

  if(name){
    try {
      const pokemon = await getAllPokemonsByName(name)
      return res.status(201).send(pokemon);
    } catch (error) {
      next(error)
      // res.status(400).send(error);
    }
  }

  try {
    const response = await getAllPokemons()
    return res.status(201).send(response);
  } catch (error) {
    next(error)
    // res.status(400).send(error);
  }
})


router.get('/:idPokemon', async function (req, res, next){
  const { idPokemon } = req.params;

  try {
    const pokemon = await getPokemonById(idPokemon);
    return res.json(pokemon)
  } catch (error) {
    res.status(400).send(error);
  }
})


router.post('/', async function(req, res, next){
  const body = req.body;

  try {
    const newPokemon = await postPokemon(body) 
    return res.status(201).send(newPokemon);
  } catch (error) {
    next(error);
  }
})


module.exports = router;
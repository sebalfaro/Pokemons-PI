const { Pokemon, Types } = require('../db');
const router = require('express').Router();
const axios = require('axios');
const { getTypesAPI } = require('../controllers')

router.get('/', async function(req, res, next){
  try {
    const result = await getTypesAPI();
    return res.status(200).json(result)
  } catch (error) {
    res.status(404).send(error);
  }
})

module.exports = router;
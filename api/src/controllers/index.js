const axios = require('axios');
const { Pokemons, Types } = require('../db');

const getTypesAPI = async()=>{
  const responseApi = await axios.get('https://pokeapi.co/api/v2/type')
  const data = responseApi.data.results;
  const types = data.map(async (t)=>{
    const [type, create] = await Types.findOrCreate({
      where: {
        id: Number(t.url.split('/')[6]),
        type: t.name
      }
    })
    return type
  })
  const result = await Promise.all(types)
  return result;
}


const getPokemon = async(url)=>{
  const getPokemonData = await axios.get(url)
  const data = getPokemonData.data
  const pokemon = {
    id: data.id,
    name: data.name,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height,
    weight: data.weight,
    img: data.sprites.other.home.front_default,
    types: data.types.map((el) => {
      const type = {
        id: Number(el.type.url.split("/")[6]),
        type: el.type.name,
      };
      return type;
    }),
    created: false,
  };
  return pokemon
}


const getAllPokemons = async()=>{
  
  try {
    const getUrlsApi = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40')
    const results = getUrlsApi.data.results
    const urls = results.map(el => el.url)
    const pokemonsApi = urls.map(async(el)=>{

      const getPokemonData = await axios.get(el)
      const data = getPokemonData.data
      const pokemon = {
        id: data.id,
        name: data.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        img: data.sprites.other.home.front_default,
        types: data.types.map((el) => {
          const type = {
            id: Number(el.type.url.split("/")[6]),
            type: el.type.name,
          };
          return type;
        }),
        created: false,
      };
      return pokemon
    })
    const pokemonsDb = await Pokemons.findAll({
      include: {
        model: Types,
        attributes: ["type"],
        through: {
          attributes: [],
        },
      }
    })

    const response = await Promise.allSettled([...pokemonsApi, ...pokemonsDb])
    
    const allPokemons = response.map(el => el.value)
    return allPokemons

  } catch (error) {
    throw error
  }
}



const getAllPokemonsByName = async(name)=>{


  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  try {
    const pokemon = await Pokemons.findAll({
      where: { name : name },
      include: {
        model: Types,
        attributes: ["type"],
        through: {
          attributes: [],
        },
      },
    });

    if(pokemon.length === 0){
      const data = await getPokemon(url)
      pokemon.push(data)
      return pokemon;
    }

    return pokemon
  } catch (error) {
    throw ({error: "The pokemon doesn't exist"})
  }

}


const getPokemonById = async(id)=>{

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  let pokemon

  try {
    if (typeof id === 'string' && id.length > 6) {
      pokemon = await Pokemons.findByPk(id, {
        include: {
          model: Types,
          attributes: ["type"],
          through: {
            attributes: [],
          },
        }
      })
      return pokemon
    }
    pokemon = await getPokemon(url);
    return pokemon;
  } catch (error) {
    throw ({error: "The ID doesn't exist"})
  }

}


const postPokemon = async (body)=>{
  const { name, hp, attack, defense, speed, height, weight, img, types} = body;
  const altImg = 'https://static.wikia.nocookie.net/0fc723e7-ed4c-4bd0-bd9f-4ae537ee6acd/scale-to-width/755';

  const newPokemon = await Pokemons.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    img: img || altImg
  })

  types.map(async (el) =>{
    const typeFind = await Types.findOne({
      where: {
        type: el.type
      }
    })
    newPokemon.addTypes(typeFind)
  })

  return newPokemon
}

module.exports = {
  getTypesAPI,
  getAllPokemons,
  postPokemon,
  getPokemonById,
  getAllPokemonsByName
};
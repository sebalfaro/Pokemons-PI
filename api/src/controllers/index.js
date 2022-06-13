const axios = require('axios');
const { Pokemons, Types } = require('../db');

const getTypes = async()=>{
  const responseApi = await axios.get('https://pokeapi.co/api/v2/type')
  const data = responseApi.data.results;
  const types = data.map(async (t)=>{
    const [type, create] = await Types.findOrCreate({
      where: {
        id: Number(t.url.split('/')[6]),
        name: t.name
      }
    })
    return type
  })
  const result = await Promise.all(types)
  return result;
}


const getUrls = (array, secondArray)=>{
  array.map(({ url })=>{
    secondArray.push(url)
  })
}

const getPokemonsApi = async()=>{
  const urls = []
  const get = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=40')
  const results = get.data.results;

  getUrls(results, urls)

  const pokemons = urls.map(async (url)=>{
    const secondGet = await axios.get(url)
    const data = secondGet.data
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
    };
    return pokemon;
  })

  const result = await Promise.all(pokemons)
  return result
}

const getPokemonsDB = async ()=>{
  try {
    const pokemonsDb = await Pokemons.findAll({
      include: {
        model: Types,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      }
    })
    return pokemonsDb
  } catch (error) {
    console.log(error)
  }
}

const getAllPokemons = async()=>{
  const firstResponse = await getPokemonsApi()
  const secondResponse = await getPokemonsDB()
  const responseAll = [...firstResponse, ...secondResponse] 
  return responseAll
}

const getAllPokemonsByName = async(name)=>{
  try {
    const pokemon = await Pokemons.findAll({ where: { name: name } })
    return pokemon
  } catch (error) {
    console.log(error);
  }

}

const getPokemonById = async(id)=>{

  try {
    if(typeof(id) === 'string'){
      console.log(id)
      // const get = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      // const data = get.data
      // const pokemon = {
      //   id: data.id,
      //   name: data.name,
      //   hp: data.stats[0].base_stat,
      //   attack: data.stats[1].base_stat,
      //   defense: data.stats[2].base_stat,
      //   speed: data.stats[5].base_stat,
      //   height: data.height,
      //   weight: data.weight,
      //   img: data.sprites.other.home.front_default,
      //   types: data.types.map((el) => {
      //     const type = {
      //       id: Number(el.type.url.split("/")[6]),
      //       type: el.type.name,
      //     };
      //     return type;
      //   }),
      // };
      // return pokemon;
    }
    // const pokemon = await Pokemons.findByPk(id)
    // if(!pokemon){
    //   console.log('ACAAAAAAAAAAAAA');
    // }
    // return pokemon
  } catch (error) {
    console.log(error);
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
        name: el.type
      }
    })
    newPokemon.addTypes(typeFind)
  })

  return newPokemon
}



module.exports = {
  getTypes,
  getAllPokemons,
  postPokemon,
  getPokemonById,
  getAllPokemonsByName
};
import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SORT_BY_ATTACK = 'SORT_BY_ATTACK'
export const SORT_BY_CREATION = 'SORT_BY_CREATION'
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID'
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME' 
export const GET_TYPES = 'GET_TYPES'
export const POST_POKEMONS = 'POST_POKEMONS'

// export const getAllPokemons = () => {
//   return async function (dispatch) {
//     return (fetch('http://localhost:3001/pokemons')
//     .then(response => response.json())
//     .then(json => dispatch({type:GET_ALL_POKEMONS, payload: json})))
//     .catch((error)=>{
//       console.log(error);
//     })
//   };
// };

export const getAllPokemons = ()=>{
  return function (dispatch){
    axios.get('http://localhost:3001/pokemons')
    .then(pokemon =>{
      dispatch({
        type: GET_POKEMONS,
        payload: pokemon.data
      })
    })
    .catch(error =>{
      //despachar accion de error
      console.log(error)
    })
  }
}

export const getPokemonByName = (name)=>{
  return async function (dispatch) {
    return (fetch(`http://localhost:3001/pokemons?name=${name}`)
    .then(response => response.json())
    .then(json => dispatch({type:GET_POKEMONS, payload: json})))
    .catch((error)=>{
      console.log(error);
    })
  };
}

export const sortbyName = (order)=>{
  return {
    type: SORT_BY_NAME,
    payload: order
  }
}

export const sortbyAttack = (order)=>{
  return {
    type: SORT_BY_ATTACK,
    payload: order
  }
}
export const sortByCreation = (order)=>{
  console.log(order)
  return {
    type: SORT_BY_CREATION,
    payload: order
  }
}
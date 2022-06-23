import axios from 'axios';
import { URL_GET_ALL_POKEMONS, URL_GET_POKEMON_BY_NAME, URL_GET_TYPES, URL_POST_POKEMON } from '../../constants/routes';

export const GET_POKEMONS = 'GET_POKEMONS'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SORT_BY_ATTACK = 'SORT_BY_ATTACK'
export const SORT_BY_CREATION = 'SORT_BY_CREATION'
export const RESET_ORDER = 'RESET_ORDER'
export const GET_TYPES = 'GET_TYPES'
export const ADD_POKEMONS = 'ADD_POKEMONS'
export const DELETE_ADDED_POKEMONS = 'DELETE_ADDED_POKEMONS'
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME'


export const getAllPokemons = ()=>{
  return async function (dispatch) {
    return (fetch(URL_GET_ALL_POKEMONS)
    .then(response => response.json())
    .then(json =>{
      let filterPokemons = json.filter(e => e !== null)
      // console.log('getAll data dispachada ', json);
      return filterPokemons
    })
    .then(json => dispatch({type:GET_POKEMONS, payload: json})))
    .catch((error)=>{
      throw error
    })
  };
}

export const getPokemonByName = (name)=>{
  return async function (dispatch) {
    return (fetch(URL_GET_POKEMON_BY_NAME + name)
    .then(response => response.json())
    .then(json => dispatch({type:GET_POKEMON_BY_NAME, payload: json})))
    .catch((error)=>{
      console.log('error ', error);
      // throw error
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
  return {
    type: SORT_BY_CREATION,
    payload: order
  }
}

export const resetOrder = ()=>{
  return {
    type: RESET_ORDER,
  }
}

// export const getPokemonByID = (id)=>{

//   return async function (dispatch) {
//     return (fetch(`${URL_GET_POKEMON_BY_ID}` + id)
//     .then(response => response.json())
//     .then(json => dispatch({type: GET_POKEMON_BY_ID , payload: json})))
//     .catch((error)=>{
//       throw error
//       // console.log('error en action',error);
//     })
//   };
// }

export const getTypes = ()=>{

  return async function (dispatch) {
    return (fetch(URL_GET_TYPES)
    .then(response => response.json())
    .then(json => dispatch({type: GET_TYPES , payload: json})))
    .catch((error)=>{
      throw error
    })
  };
}

export const addPokemon = (data)=>{
  return {
    type: ADD_POKEMONS,
    payload: data
  }
}

export const deleteAddedPokemons = ()=>{
  return {
    type: DELETE_ADDED_POKEMONS
  }
}

export const postPokemon = (data)=>{
  
  return async function () {
    try {
      const response = axios.post(`${URL_POST_POKEMON}`, data)
      return response;
    } catch (error) {
      throw error
    }
  };
}
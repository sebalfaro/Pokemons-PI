import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SORT_BY_ATTACK = 'SORT_BY_ATTACK'
export const SORT_BY_CREATION = 'SORT_BY_CREATION'
export const RESET_ORDER = 'RESET_ORDER'
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID'
export const GET_TYPES = 'GET_TYPES'
export const ADD_POKEMONS = 'ADD_POKEMONS'
export const DELETE_ADDED_POKEMONS = 'DELETE_ADDED_POKEMONS'


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

export const getPokemonByID = (id)=>{

  return async function (dispatch) {
    return (fetch(`http://localhost:3001/pokemons/${id}`)
    .then(response => response.json())
    .then(json => dispatch({type: GET_POKEMON_BY_ID , payload: json})))
    .catch((error)=>{
      // throw error
      console.log('error en action',error);
    })
  };
}
export const getTypes = ()=>{

  return async function (dispatch) {
    return (fetch(`http://localhost:3001/types`)
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
  
  return async function (dispatch) {
    try {
      const response = axios.post(`http://localhost:3001/pokemons`, data);
      return response;
    } catch (error) {
      throw error
    }
  };
}
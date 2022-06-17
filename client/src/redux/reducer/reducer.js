import { GET_ALL_POKEMONS, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, GET_TYPES, POST_POKEMONS } from "../actions/actions";

const initialState = {
  pokemons: [],
  pokemon: {},
  types: [],
  form: {}
}

const rootReducer = (state = initialState, action) =>{

  const { type, payload} = action;
 

  switch (type) {
    
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: state.countries.length !== 250 ? payload : state.countries
      }
    case GET_POKEMON_BY_ID:
      return{
        ...state,
        pokemon: payload
      }
    case GET_POKEMON_BY_NAME:
      return{
        ...state,
        pokemon: payload
      }

    case GET_TYPES:
      return 

    case POST_POKEMONS:
      return 
  
    default:
      return state;
  }

}

export default rootReducer;
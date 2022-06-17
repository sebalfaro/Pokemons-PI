import { ASCENDING, CREATED } from "../../constants/sort";
import { GET_POKEMONS, GET_TYPES, POST_POKEMONS, SORT_BY_NAME, SORT_BY_ATTACK, SORT_BY_CREATION, RESET_ORDER } from "../actions/actions";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
  form: {}
}

const rootReducer = (state = initialState, action) =>{

  const { type, payload = true} = action;
 

  switch (type) {
    
    case GET_POKEMONS:
      return {
        ...state,
        filteredPokemons: payload,
        pokemons: payload,
      }
    
    case SORT_BY_NAME:

      let orderByNamePokemons = [...state.pokemons]
      orderByNamePokemons = orderByNamePokemons.sort((a, b)=>{
        if (a.name < b.name) {
          return payload === ASCENDING ? -1 : 1;
        }
        if (a.name > b.name) {
          return payload === ASCENDING ? 1 : -1;
        }

        return 0;
      })

      return {
        ...state,
        filteredPokemons: orderByNamePokemons
      }

    case SORT_BY_ATTACK:

      let orderByAttack = [...state.pokemons]
      orderByAttack = orderByAttack.sort((a, b) =>{
        if(payload === ASCENDING){
          return a.attack - b.attack;
        } else {
          return b.attack - a.attack;
        }
      })

      return {
        ...state,
        filteredPokemons: orderByAttack
      }

    case SORT_BY_CREATION: 

      let orderByCreation = []

      if(payload === CREATED){
        orderByCreation = state.pokemons.filter(pokemon => pokemon.created === true)
      } else {
        orderByCreation = state.pokemons.filter(pokemon => pokemon.created === false)
      }

      return {
        ...state,
        filteredPokemons: orderByCreation
      }

    case RESET_ORDER:

      return {
        ...state,
        filteredPokemons: state.pokemons
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
import { expressions } from "../constants/expressions";

export const validateTest = (input)=>{
  
  let error = {}
  const { name, number, img } = expressions;
  const numberErrorMessage = `This value must be a 1 to 1000 number`;

  if(!input.name || !name.test(input.name)){
    error.name = 'This camp is required: only a-z, A-Z, 0-9, -, _ are accepted'
  } 
  if(!input.hp || !number.test(input.hp)){
    error.hp = numberErrorMessage
  }
  if(!input.attack || !number.test(input.attack)){
    error.attack = numberErrorMessage
  }
  if(!input.defense || !number.test(input.defense)){
    error.defense = numberErrorMessage
  }
  if(!input.speed || !number.test(input.speed)){
    error.speed = numberErrorMessage
  }
  if(!input.height || !number.test(input.height)){
    error.height = numberErrorMessage
  }
  if(!input.weight || !number.test(input.weight)){
    error.weight = numberErrorMessage
  }
  if(!input.img || !img.test(input.img)){
    error.img = 'This camp is required: it must be an URL adress'
  }
  if (input.types.length === 0){
    error.types = "Pokemons need have a type (max 2 types per pokemon)"
  }
  if(input.types.length > 2 ){
    error.types = "Pokemons need have a type (max 2 types per pokemon)"
  }

  return error
}
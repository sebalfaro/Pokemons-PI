export const numberErrorMessage = `This value must be a 1 to 1000 number`;

export const errorTypes = [
  {
    type: 'name',
    message: `This camp is required: only a-z, A-Z, 0-9, -, _ are accepted`
  },
  {
    type: 'hp',
    message: numberErrorMessage  
  },
  {
    type: 'attack',
    message: numberErrorMessage
  },
  {
    type: 'defense',
    message: numberErrorMessage      
  },
  {
    type: 'speed',
    message: numberErrorMessage      
  },
  {
    type: 'height',
    message: numberErrorMessage      
  },
  {
    type: 'weight',
    message: numberErrorMessage      
  },
  {
    type: 'img',
    message: `This camp is required: it must be an URL adress`
  },
  {
    type: 'checkbox',
    message: `Pokemons can't have more than 2 types`
  }
]

import { expressions } from "../constants/expressions"
import { errorTypes } from "../constants/errorTypes";

export const validate = (inputType, value, setError, types)=>{
  const { name, number, img } = expressions;

  switch (inputType) {

    case 'name':
      if(!name.test(value)){
        setError(errorTypes[0])
      } else{
        setError({})
      }
      break;

    case 'hp':
      if(!number.test(value)){
        setError(errorTypes[1])
      } else{
        setError({})
      }
      break;

    case 'attack':
      if(!number.test(value)){
        setError(errorTypes[2])
      } else{
        setError({})
      }
      break;

    case 'defense':
      if(!number.test(value)){
        setError(errorTypes[3])
      } else{
        setError({})
      }
      break;

    case 'speed':
      if(!number.test(value)){
        setError(errorTypes[4])
      } else{
        setError({})
      }
      break;

    case 'height':
      if(!number.test(value)){
        setError(errorTypes[5])
      } else{
        setError({})
      }
      break;
      
    case 'weight':
      if(!number.test(value)){
        setError(errorTypes[6])
      } else{
        setError({})
      }
      break;

    case 'img':
      if(!img.test(value)){
        setError(errorTypes[7])
      } else{
        setError({})
      }
      break;

    case 'checkbox':
      console.log('validate> ', types.length);
      if(types.length > 1 ){
        // console.log('validate: ', pokemon);
        setError(errorTypes[8])
      } else{
        setError({})
      }
      break;

    default:
      setError({});
  }

}
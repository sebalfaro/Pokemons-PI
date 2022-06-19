import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, deleteAddedPokemons, getTypes, postPokemon } from "../../redux/actions/actions";
import { validate } from "../../tools/validate";

const AddForm = () => {

  let types = useSelector((state)=> state.types)
  let pokemonsAdded = useSelector((state)=> state.pokemonsAdded)

  const [pokemon, setPokemon] = useState({ types: []})
  const [error, setError] = useState([])

  const dispatch = useDispatch()
  
  let display = pokemonsAdded.length ||  Object.keys(pokemon).length > 0 ? false : true

  console.log('error: ', error);
  console.log('pokemon: ', pokemon);


  useEffect(() => {
    dispatch(getTypes())
  }, []);



  const inputHandler = (e)=>{
    console.log(e.target.name);
    e.preventDefault()
    validate(e.target.name, e.target.value, setError)
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    })
  }


 
  const saveHandler =(e)=>{
    e.preventDefault()
    dispatch(addPokemon(pokemon))
    setPokemon({ types: []})
    e.target.form.reset()
  }

  const deleteHandler =(e)=>{
    e.target.form.reset();
    dispatch(deleteAddedPokemons())
    setPokemon({ types: []})
    setError({})
  }

  const resetHandler =(e)=>{
    e.target.form.reset();
    setPokemon({ types: []})
    setError({})
  }

  const onSubmit = (e)=>{
    
    if(error.length === 0){
      if(!pokemonsAdded.length === 0){
        dispatch(postPokemon(pokemon))
      } else {
        dispatch(postPokemon(pokemon))
        pokemonsAdded.map(el => dispatch(postPokemon(el)))
      }
    }
  }  

  const typesHandler = (e)=>{

    if(e.target.checked === false){
      const stateFiltered = pokemon.types.filter(el => el.type !== e.target.value)
      setPokemon({
        ...pokemon,
        types: stateFiltered,
      })
    } else{
      setPokemon({
        ...pokemon,
        types: [...pokemon.types, {type: e.target.value}],
      })
    }
    validate(e.target.name, true, setError, pokemon.types.length)
  }

  return (
    <section>
      <div>
        <h4>AddForm</h4>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Name </label>
          <input name="name" type="text" value={pokemon.name} onChange={inputHandler} required/>
          { error.type === 'name' && <p>{error.message}</p> }
          <br />
          <label htmlFor="">HP </label>
          <input name="hp" type="text" value={pokemon.hp} onChange={inputHandler} required/>
          { error.type === 'hp' && <p>{error.message}</p> }
          <br />

          <label htmlFor="" >Attack </label>
          <input name="attack" type="text" value={pokemon.attack} onChange={inputHandler} required/>
          { error.type === 'attack' && <p>{error.message}</p> }
          <br />

          <label htmlFor="">Defense </label>
          <input name="defense" type="text" value={pokemon.defense} onChange={inputHandler} required/>
          { error.type === 'defense' && <p>{error.message}</p> }
          <br />

          <label htmlFor="">Speed </label>
          <input name="speed" type="text" value={pokemon.speed} onChange={inputHandler} required/>
          { error.type === 'speed' && <p>{error.message}</p> }
          <br />

          <label htmlFor="">Height </label>
          <input name="height" type="text" value={pokemon.height} onChange={inputHandler} required/>
          { error.type === 'height' && <p>{error.message}</p> }
          <br />

          <label htmlFor="">Weight </label>
          <input name="weight" type="text" value={pokemon.weight} onChange={inputHandler} required/>
          { error.type === 'weight' && <p>{error.message}</p> }
          <br />

          <label htmlFor="">Image </label>
          <input name="img" type="text" value={pokemon.img} onChange={inputHandler} required/>
          { error.type === 'img' && <p>{error.message}</p> }
          <br />

          {
            types?.map(({ type, index }) =>{
              return (
                <div key={'div'+index+type}>
                  <label htmlFor={type} key={'label'+index}>
                    {type}
                    <input
                      name="checkbox"
                      type="checkbox"
                      value={type}
                      onChange={typesHandler}
                      key={'input'+index}
                    />
                  </label>
                  <br />
                </div>
              );
            })
          }
          { error.type === 'checkbox' && <p>{error.message}</p> }
          <br />

          <br />
          <input type="button" onClick={saveHandler} value='Save and create other pokemon' disabled={display}/>
          <br />

          <button type="reset" onClick={resetHandler} disabled={display}>Reset</button>
          <br />

          <input type="button" onClick={deleteHandler} value='Delete pokemons queue' disabled={display}/>
          {
            display
              ? <input type="submit" value={'Create Pokemon'} disabled='true'/>
              : <input type="submit" value={ pokemonsAdded.length > 0? 'Create Pokemons Queue' : 'Create Pokemon'}/>
          }
        </form>
      </div>
    </section>
  );
};

export default AddForm;

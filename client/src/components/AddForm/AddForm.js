import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, deleteAddedPokemons, getTypes, postPokemon } from "../../redux/actions/actions";
import { validate } from "../../tools/validate";

const AddForm = () => {

  let types = useSelector((state)=> state.types)
  let pokemonsAdded = useSelector((state)=> state.pokemonsAdded)

  const [pokemon, setPokemon] = useState({ types: []})
  const [type, setType] = useState([])
  const [error, setError] = useState([])
  const [checked, setChecked] = useState({})

  const dispatch = useDispatch()
  
  let display = pokemonsAdded.length ||  Object.keys(pokemon).length > 0 ? false : true

  console.log('error: ', error);
  console.log('pokemon: ', pokemon);


  useEffect(() => {
    dispatch(getTypes())
  }, []);



  const onInput = (e)=>{
    e.preventDefault()
    validate(e.target.name, e.target.value, setError)
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    })
  }

  const onInputTypes = (e)=>{
    // console.log(e);

    if(e.target.checked === false){
      const stateFiltered = pokemon.types.filter(el => el.name !== e.target.value)
      console.log('types filtardo: ', stateFiltered);
      setPokemon({
        ...pokemon,
        types: stateFiltered,
      })
    } else{
      setPokemon({
        ...pokemon,
        types: [...pokemon.types, {name: e.target.value}],
      })
    }
    validate(e.target.name, true, setError, pokemon.types)
  }

  const saveHandler =(e)=>{
    e.preventDefault()
    dispatch(addPokemon(pokemon))
    setPokemon({})
    e.target.form.reset()
  }

  const deleteHandler =(e)=>{
    e.target.form.reset();
    dispatch(deleteAddedPokemons())
    setPokemon({})
    setError({})
  }

  const resetHandler =(e)=>{
    e.target.form.reset();
    setPokemon({})
    setError({})
  }

  const onSubmit = (e)=>{
    if(!error.length){
      if(!pokemonsAdded.length){
        dispatch(postPokemon(pokemon))
      }
    }
  }  

  return (
    <section>
      <div>
        <h4>AddForm</h4>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Name </label>
          <input name="name" type="text" value={pokemon.name} onChange={onInput}/>
          { error.type === 'name' && <p>{error.message}</p> }
          <br />
          <label htmlFor="">HP </label>
          <input name="hp" type="number" value={pokemon.hp} onChange={onInput}/>
          { error.type === 'hp' && <p>{error.message}</p> }
          <br />

          <label htmlFor="" >Attack </label>
          <input name="attack" type="text" value={pokemon.attack} onChange={onInput}/>
          { error.type === 'attack' && <p>{error.message}</p> }
          <br />

          <label htmlFor="">Defense </label>
          <input name="defense" type="text" value={pokemon.defense} onChange={onInput}/>
          { error.type === 'defense' && <p>{error.message}</p> }
          <br />

          <label htmlFor="">Speed </label>
          <input name="speed" type="text" value={pokemon.speed} onChange={onInput}/>
          { error.type === 'speed' && <p>{error.message}</p> }
          <br />

          <label htmlFor="">Height </label>
          <input name="height" type="text" value={pokemon.height} onChange={onInput}/>
          { error.type === 'height' && <p>{error.message}</p> }
          <br />

          <label htmlFor="">Weight </label>
          <input name="weight" type="text" value={pokemon.weight} onChange={onInput}/>
          { error.type === 'weight' && <p>{error.message}</p> }
          <br />

          <label htmlFor="">Image </label>
          <input name="img" type="text" value={pokemon.img} onChange={onInput}/>
          { error.type === 'img' && <p>{error.message}</p> }
          <br />

          {
            types?.map(({ name, index }) =>{
              return (
                <div key={index}>
                  <label htmlFor={name} key={index}>
                    {name}
                    <input
                      name="checkbox"
                      type="checkbox"
                      value={name}
                      onChange={onInputTypes}
                      key={index}
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

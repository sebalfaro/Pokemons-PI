
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, deleteAddedPokemons, getTypes, postPokemon } from "../../redux/actions/actions";
import { validateTest } from "../../tools/validateTest";
import { useHistory } from 'react-router'
import Spinner from '../Spinner/Spinner'
import './AddForm.css'


const AddForm = () => {

  const pokemonTemplate = { 
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    img: '',
    types: []
  }

  let types = useSelector((state)=> state.types)
  let pokemonsAdded = useSelector((state)=> state.pokemonsAdded)
  const [pokemon, setPokemon] = useState(pokemonTemplate)
  const [error, setError] = useState([])
  const dispatch = useDispatch()
  const history = useHistory()
  let display = pokemonsAdded.length ||  Object.keys(pokemon).length === 9 ? false : true
  let allDone = Object.keys(error).length === 0 && Object.keys(pokemon).length === 9 && pokemon.types.length > 0 ? true : false 

  console.log('error', error);
  console.log('pokemon', pokemon);

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch]);

  const inputHandler = (e)=>{
    e.preventDefault()
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    })
    e.preventDefault()
    setError(validateTest({
      ...pokemon,
      [e.target.name]: e.target.value,
    }))
  }
 
  const saveHandler =(e)=>{
    e.preventDefault()
    if(allDone){
      dispatch(addPokemon(pokemon))
      setPokemon(pokemonTemplate)
      e.target.form.reset()
    } else {
      alert('The pokemon could not be added to the queue')
    }
  }

  const deleteHandler =(e)=>{
    e.target.form.reset();
    dispatch(deleteAddedPokemons())
    setPokemon(pokemonTemplate)
  }

  const resetHandler =(e)=>{
    e.target.form.reset();
    setPokemon(pokemonTemplate)
  }

  const onSubmit = (e)=>{

    if(pokemonsAdded.length === 0 && allDone){
        dispatch(postPokemon(pokemon))
        alert("Your pokemon have been created succesfully");
        history.push('/pokemons')
    } else if(pokemonsAdded.length >= 1){
        pokemonsAdded.map(el => dispatch(postPokemon(el)))
        history.push('/pokemons') 
        if(pokemonsAdded.length === 1){
          alert("Pokemon in queue have been created succesfully");
        } else if (pokemonsAdded.length > 1){
          alert("Pokemons in queue have been created succesfully");
        }
    } else if(allDone && pokemonsAdded.length > 0){
        dispatch(postPokemon(pokemon))
        pokemonsAdded.map(el => dispatch(postPokemon(el)))
        alert("Your pokemons have been created succesfully");
        history.push('/pokemons')
    } else {
        e.preventDefault()
        if(pokemonsAdded.length === 0){
          alert(`the pokemon couldn't be created, try again!`)
        } else {
          alert(`the pokemon couldn't be created, try again!`)
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
      setError(validateTest({
        ...pokemon,
        [e.target.name]: e.target.value,
      }))
    } else{
      setPokemon({
        ...pokemon,
        types: [...pokemon.types, {type: e.target.value}],
      })
    }    
    setError(validateTest({
      ...pokemon,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="addform_box">
      <form onSubmit={onSubmit}>
        <div className="addform_entry_box">
          <div className="addform_data_box">
            <div className="addform_data_input_box">
              <label htmlFor="">Name</label>
              <input
                name="name"
                type="text"
                value={pokemon.name}
                onChange={inputHandler}
              />
              {error.name && <p>{error.name}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">HP </label>
              <input
                name="hp"
                type="text"
                value={pokemon.hp}
                onChange={inputHandler}
              />
              {error.hp && <p>{error.hp}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">Attack </label>
              <input
                name="attack"
                type="text"
                value={pokemon.attack}
                onChange={inputHandler}
              />
              {error.attack && <p>{error.attack}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">Defense </label>
              <input
                name="defense"
                type="text"
                value={pokemon.defense}
                onChange={inputHandler}
              />
              {error.defense && <p>{error.defense}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">Speed </label>
              <input
                name="speed"
                type="text"
                value={pokemon.speed}
                onChange={inputHandler}
              />
              {error.speed && <p>{error.speed}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">Height </label>
              <input
                name="height"
                type="text"
                value={pokemon.height}
                onChange={inputHandler}
              />
              {error.height && <p>{error.height}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">Weight </label>
              <input
                name="weight"
                type="text"
                value={pokemon.weight}
                onChange={inputHandler}
              />
              {error.weight && <p>{error.weight}</p>}
            </div>

            <div className="addform_data_input_box">
            <label htmlFor="">Image </label>
            <input
              name="img"
              type="text"
              value={pokemon.img}
              onChange={inputHandler}
            />
            {error.img && <p>{error.img}</p>}
            </div>

          </div>

          <div className="addform_types_box">
            <h4>Types</h4>
            <div className="addform_types_box_cases">
            {types.length < 1
              ? <Spinner />
              : types.map(({ type, index }) => {
              return (
                <div className="addform_type_box_case" key={`div_${index}_${type}`}>
                  <label htmlFor={type} key={"label" + index}>
                    {type}
                    <input
                      name="checkbox"
                      type="checkbox"
                      value={type}
                      onChange={typesHandler}
                      key={"input" + index}
                    />
                  </label>
                  <br />
                </div>
              );
            })}
            </div>
            {error.types && <p>{error.types}</p>}

          </div>
          <br />
        </div>

        <div className="addform_buttons_box">
          <div className="buttons_text">
          <h3>Options</h3>
          </div>
          <input
            type="button"
            onClick={saveHandler}
            value="Add to queue and set other pokemons"
            disabled={display}
          />
          <br />

          <input type="reset" onClick={resetHandler} disabled={display} value="Reset" />
          <br />

          <input
            type="button"
            onClick={deleteHandler}
            value="Delete pokemons queue"
            disabled={display}
          />
          {display ? (
            <input type="submit" value={"Create Pokemon"} disabled="true" />
          ) : (
            <input
              type="submit"
              value={
                pokemonsAdded.length > 0
                  ? "Create Pokemons Queue"
                  : "Create Pokemon"
              }
            />
          )}
        </div>
        
      </form>
    </div>
  );
};

export default AddForm;

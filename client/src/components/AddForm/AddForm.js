import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, deleteAddedPokemons, getTypes, postPokemon } from "../../redux/actions/actions";
import { validate } from "../../tools/validate";
import './AddForm.css'

const AddForm = () => {

  let types = useSelector((state)=> state.types)
  let pokemonsAdded = useSelector((state)=> state.pokemonsAdded)

  const [pokemon, setPokemon] = useState({ types: []})
  const [error, setError] = useState([])

  const dispatch = useDispatch()
  
  let display = pokemonsAdded.length ||  Object.keys(pokemon).length > 0 ? false : true

  // console.log('error: ', error);
  // console.log('pokemon: ', pokemon);


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
    <div className="addform_box">
      <h2>Add Your Pokemon!</h2>
      <form onSubmit={onSubmit}>
        <div className="addform_entry_box">
          <div className="addform_data_box">
            <div className="addform_data_input_box">
              <label htmlFor="">Name</label>
              {/* <br  */}
              <input
                name="name"
                type="text"
                value={pokemon.name}
                onChange={inputHandler}
                required
              />
              {error.type === "name" && <p>{error.message}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">HP </label>
              <input
                name="hp"
                type="text"
                value={pokemon.hp}
                onChange={inputHandler}
                requiredk
              />
              {error.type === "hp" && <p>{error.message}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">Attack </label>
              <input
                name="attack"
                type="text"
                value={pokemon.attack}
                onChange={inputHandler}
                required
              />
              {error.type === "attack" && <p>{error.message}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">Defense </label>
              <input
                name="defense"
                type="text"
                value={pokemon.defense}
                onChange={inputHandler}
                required
              />
              {error.type === "defense" && <p>{error.message}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">Speed </label>
              <input
                name="speed"
                type="text"
                value={pokemon.speed}
                onChange={inputHandler}
                required
              />
              {error.type === "speed" && <p>{error.message}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">Height </label>
              <input
                name="height"
                type="text"
                value={pokemon.height}
                onChange={inputHandler}
                required
              />
              {error.type === "height" && <p>{error.message}</p>}
            </div>

            <div className="addform_data_input_box">
              <label htmlFor="">Weight </label>
              <input
                name="weight"
                type="text"
                value={pokemon.weight}
                onChange={inputHandler}
                required
              />
              {error.type === "weight" && <p>{error.message}</p>}
            </div>

            <div className="addform_data_input_box">
            <label htmlFor="">Image </label>
            <input
              name="img"
              type="text"
              value={pokemon.img}
              onChange={inputHandler}
              required
            />
            {error.type === "img" && <p>{error.message}</p>}
            </div>

          </div>

          <div className="addform_types_box">
            <h4>Types</h4>
            <div className="addform_types_box_cases">
            {types?.map(({ type, index }) => {
              return (
                <div className="addform_type_box_case" key={"div" + index + type}>
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
            {error.type === "checkbox" && <p>{error.message}</p>}

          </div>
          <br />
        </div>

        <div className="addform_buttons_box">
          <br />
          <input
            type="button"
            onClick={saveHandler}
            value="Save and create other pokemon"
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

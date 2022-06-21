
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, deleteAddedPokemons, getTypes, postPokemon } from "../../redux/actions/actions";
import { expressions } from "../../constants/expressions";
import { useHistory } from 'react-router'
import Spinner from '../Spinner/Spinner'
import './AddForm.css'

const validateTest = (input,)=>{
  
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


const AddForm = () => {

  let types = useSelector((state)=> state.types)
  let pokemonsAdded = useSelector((state)=> state.pokemonsAdded)
  const [pokemon, setPokemon] = useState({ 
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    img: '',
    types: []
  })
  const [error, setError] = useState([])
  const dispatch = useDispatch()

  let display = pokemonsAdded.length ||  Object.keys(pokemon).length > 0 ? false : true

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
    
    if(Object.keys(error).length === 0){
      if(pokemonsAdded.length === 0){
        dispatch(postPokemon(pokemon))
        alert("Your pokemon have been created succesfully");
        
      } else {
        dispatch(postPokemon(pokemon))
        pokemonsAdded.map(el => dispatch(postPokemon(el)))
        alert("Your pokemons have been created succesfully");
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
    setError(validateTest({
      ...pokemon,
      [e.target.name]: e.target.value,
    }))
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
              {error.name && <p>{error.name}</p>}
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
              {error.hp && <p>{error.hp}</p>}
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
              {error.attack && <p>{error.attack}</p>}
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
              {error.defense && <p>{error.defense}</p>}
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
              {error.speed && <p>{error.speed}</p>}
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
              {error.height && <p>{error.height}</p>}
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
              {error.weight && <p>{error.weight}</p>}
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

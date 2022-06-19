import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonByID } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import PokemonDetailCard from "../PokemonDetailCard/PokemonDetailCard";

const PokemonDetails = (props) => {

  const { idPokemon } = useParams()
  const dispatch = useDispatch()
  let pokemon = useSelector((state)=> state.pokemon)
  

  useEffect(() => {
    dispatch(getPokemonByID(idPokemon))
  }, []);

  return (
    <div>
      <h1>Pokemon Details</h1>
      {
        pokemon.error
          ? <p>{pokemon.error}</p>
          : <PokemonDetailCard {...pokemon}/>
      }
      
    </div>
  );
};

export default PokemonDetails;

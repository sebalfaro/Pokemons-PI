import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonByID } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import PokemonDetailCard from "../PokemonDetailCard/PokemonDetailCard";

const PokemonDetails = (props) => {

  const { idPokemon } = useParams()
  const dispatch = useDispatch()
  let pokemon = useSelector((state)=> state.pokemon[0])

  useEffect(() => {
    dispatch(getPokemonByID(idPokemon))
  }, []);
  console.log(pokemon);

  return (
    <div>
      <h1>Pokemon Details</h1>
      <PokemonDetailCard {...pokemon}/>
    </div>
  );
};

export default PokemonDetails;

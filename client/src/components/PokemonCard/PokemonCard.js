import React from "react";
import { TypeCard } from "../TypeCard/TypeCard";

const PokemonCard = ({img, name, types}) => {

  return (
    <div>
      <div><img src={img} alt={`${name}_img`} /></div>
      <h3>{name}</h3>
      <h4>Types</h4>
      {types.map(type =>{return <TypeCard type={type.type} key={type.id}/>})}
    </div>
  );
};

export default PokemonCard;

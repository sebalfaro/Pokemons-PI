import React from "react";
import { Link } from "react-router-dom";
import { TypeCard } from "../TypeCard/TypeCard";

const PokemonCard = ({img, name, types, id}) => {

  return (
    <div>
      <Link to={`/pokemons/${id}`}>
        <div>
          <img src={img} alt={`${name}_img`} />
        </div>
        <h3>{name}</h3>
        <h4>Types</h4>
        {types.map((type) => {
          return <TypeCard type={type.type} key={type.id} />;
        })}
      </Link>
    </div>
  );
};

export default PokemonCard;

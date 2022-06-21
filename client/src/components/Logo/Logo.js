import React from "react";
import { Link } from "react-router-dom";
import PokemonLogo from "../PokemonLogo/PokemonLogo";
import './Logo.css'

const Logo = () => {
  return (
    <Link to={'/pokemons'}>
      <div className="logo">
        <PokemonLogo />
      </div>
    </Link>
  );
};

export default Logo;

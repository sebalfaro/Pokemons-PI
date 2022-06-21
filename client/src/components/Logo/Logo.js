import React from "react";
import { Link } from "react-router-dom";
import PokemonLogo from "../PokemonLogo/PokemonLogo";
import './Logo.css'

const Logo = ({ width, height, size}) => {
  return (
    <Link to={'/pokemons'}>
      <div className={"logo_" + size} >
        <PokemonLogo width={width} height={height} />
      </div>
    </Link>
  );
};

export default Logo;

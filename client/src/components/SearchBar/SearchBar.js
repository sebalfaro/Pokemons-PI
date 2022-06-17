import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions/actions";

const SearchBar = () => {

  const [ search, setSearch] = useState('')
  const dispatch = useDispatch()


  const onSubmit =(e)=>{
    e.preventDefault()
    dispatch(getPokemonByName(search))
  }
  const onInputChange =(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={search} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default SearchBar;

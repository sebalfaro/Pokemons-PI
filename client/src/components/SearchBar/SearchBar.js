import React, { useEffect } from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemonByName, resetOrder } from "../../redux/actions/actions";
import './SearchBar.css'

const SearchBar = () => {

  const [ search, setSearch] = useState('')
  const dispatch = useDispatch()


  useEffect(() => {
  
    return () => {
      dispatch(resetOrder())
    };
  }, []);
  

  const onSubmit =(e)=>{
    e.preventDefault()
    if(!search){
      alert('Input the pokemon name!')
    } else{
      dispatch(getPokemonByName(search))
    }

  }
  const onInputChange =(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <nav className="searchbar_box">
      <form className="searchbar_form" onSubmit={onSubmit}>
        <input
          className="searchbar_form_input"
          type="text"
          onChange={onInputChange}
          value={search}
        />
        <input className="searchbar_form_submit" type="submit" value="Search" />
      </form>

      <div className="searchbar_link">
        <Link to={"/add"}>Create your own pokemon</Link>
      </div>
    </nav>
  );
};

export default SearchBar;

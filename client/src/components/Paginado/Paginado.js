import React from "react";
import './Paginado.css'

const Paginado = ({ pokemonsPerPage, allPokemons, paginado }) => {
  const pageNumber = []
  console.log('pagenumber ', pageNumber);

  for (let index = 1; index <= Math.ceil(allPokemons/pokemonsPerPage); index++) {
    pageNumber.push(index)
  }

  return(
    <nav className="paginado_box">
      <ul className="paginado_ul">
        { pageNumber && pageNumber.map(number =>{
          return (
            <a key={'a_' + number} className="number_link" onClick={() => paginado(number)}>
              <div className="number_box" key={"div" + number}>
                <li className="number" key={number}>
                  {number}
                </li>
              </div>
            </a>
          );
        })} 
      </ul>
    </nav>
  )
};

export default Paginado;

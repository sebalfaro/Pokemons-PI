import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import PokemonDetail from './components/PokemonDetails/PokemonDetails'
import Pokemons from './components/Pokemons/Pokemons'
import Error404 from './components/Error404/Error404'
import AddPokemon from './components/AddPokemon/AddPokemon';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/pokemons"} component={Pokemons} />
        <Route exact path={"/pokemons/:idPokemon"} component={PokemonDetail} />
        <Route exact path={"/add"} component={AddPokemon} />
        <Route exact path={'*'} component={Error404} />
      </Switch>
    </div>
  );
}

export default App;

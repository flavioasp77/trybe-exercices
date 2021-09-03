import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    this.handleNextPokemon = this.handleNextPokemon.bind(this);
  }
  
  handleNextPokemon() {
      if (pokemons.length -1 > this.state.count) {
      this.setState((preventState) => ({
        count: preventState.count + 1,
      }))
    } else {
      this.setState({
        count: 0,
      })
    }
  }
  render() {
    return (
      <div>
        <div className="pokedex">          
         <Pokemon pokemon={pokemons[this.state.count]} />    
        </div>      

        <button onClick={ this.handleNextPokemon }>Próximo Pokemon</button>
      </div>      
    );
  }
}

export default Pokedex;
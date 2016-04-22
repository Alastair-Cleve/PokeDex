var React = require('react');
var PokemonStore = require('../../stores/pokemonStore');
var ClientActions = require('../../actions/clientActions');
var PokemonIndexItem = require('./pokemonIndexItem');


var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return ({ pokemons: PokemonStore.all() });
  },

  componentDidMount: function() {
    this.listener = PokemonStore.addListener(this._onChange);
    ClientActions.fetchAllPokemons();
  },

  _onChange: function() {
    this.setState( { pokemons: PokemonStore.all() });
  },

  componentWillUnmount: function() {
    this.listener.remover();
  },

  render: function() {
    var pokemons = this.state.pokemons.map(function(pokemon) {
      return <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>;
    });
    return (
      <ul>
        {pokemons}
      </ul>
    );
  }
});

module.exports = PokemonsIndex;

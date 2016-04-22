var React = require('react');
var PokemonStore = require('../../stores/pokemonStore');
var ClientActions = require('../../actions/clientActions');
var HashHistory = require('react-router').hashHistory;




var PokemonsIndexItem = React.createClass({
  showDetail: function() {
    HashHistory.push("pokemon/" + this.props.pokemon.id);
  },

  render: function() {
    var pokemonName = this.props.pokemon.name;
    var pokeType = this.props.pokemon.poke_type;
    return (
      <li className="poke-list-item" onClick={this.showDetail}>
        <p>Name: {pokemonName}</p>
        <p>Poke Type: {pokeType}</p>
      </li>
    );
  }
});

module.exports = PokemonsIndexItem;

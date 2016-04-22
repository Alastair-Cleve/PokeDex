var React = require('react');
var PokemonStore = require('../../stores/pokemonStore');
var ClientActions = require('../../actions/clientActions');

var ToyDetail = React.createClass({
  getInitialState: function () {
    return {toy: null};
  },

  componentWillReceiveProps: function(newProps) {
    // this.getStateFromStore();
    ClientActions.fetchSinglePokemon(newProps.params.pokemonId);
  },

  componentDidMount: function () {
    PokemonStore.addListener(this.getStateFromStore);
    if (this.props.params.pokemonId) {
      ClientActions.fetchSinglePokemon(this.props.params.pokemonId);
    }
  },

  componentWillUnmount: function() {

  },

  _onChange: function() {

  },

  getStateFromStore: function(){
    if(!this.props.params.pokemonId) {
      return;
    }

    var id = parseInt(this.props.params.pokemonId);
    this.setState({pokemon: PokemonStore._singlePokemon()});
    //this.setState({pokemon: PokemonStore.find(id)});
  },

  render: function() {
    if (!this.state.pokemon) {
      return <div/>;
    }
    return (
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            <img src={this.state.pokemon.image_url} />
            <p>Name: {this.state.pokemon.name}</p>
            <p>Attack: {this.state.pokemon.attack}</p>
            <p>Defense: {this.state.pokemon.defense}</p>
            <p>Poke Type: {this.state.pokemon.poke_type}</p>
            <p>Moves: {this.state.pokemon.moves}</p>
          </div>
        </div>
        { this.props.children }
      </div>
    );
  }
});

module.exports = ToyDetail;

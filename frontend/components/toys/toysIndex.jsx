var React = require('react');
var ToyIndexItem = require('./toyIndexItem');
var PokemonStore = require('../../stores/pokemonStore');
var ClientActions = require('../../actions/clientActions');



var ToyIndex = React.createClass({
  getInitialState: function() {
    return ({ toys: PokemonStore._singlePokemon().toys });
  },

  componentDidMount: function() {
    this.listener = PokemonStore.addListener(this._onChange);
  },

  _onChange: function() {
    this.setState( { toys: PokemonStore._singlePokemon().toys });
  },

  componentWillUnmount: function() {
    this.listener.remover();
  },

  render: function() {
    if(!this.state.toys) {
      return <li/>;
    }
    var toys = this.state.toys.map(function(toy){
      return <ToyIndexItem toy={toy} />;
    });
    return (
      <div>
        {toys}
      </div>
    );
  }
});

module.exports = ToyIndex;

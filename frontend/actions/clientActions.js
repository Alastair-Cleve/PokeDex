var Dispatcher = require('../dispatcher/dispatcher');
var PokemonApiUtil = require('../util/apiUtil');

var clientActions = {
  fetchAllPokemons: function() {
    PokemonApiUtil.fetchAllPokemons();
  },

  fetchSinglePokemon: function(id) {
    PokemonApiUtil.fetchSinglePokemon(id);
  }
};

module.exports = clientActions;

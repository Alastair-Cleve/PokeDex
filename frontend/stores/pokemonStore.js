var _pokemons = {};
var _singlePokemon = null;
var Store = require('flux/utils').Store;
var PokemonConstants = require('../constants/pokemonConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonStore = new Store(AppDispatcher);

PokemonStore.all = function() {
  var localArray = [];
  var pokemonKeys = Object.keys(_pokemons);
  for(var i = 0; i < pokemonKeys.length; i++) {
    localArray.push(_pokemons[pokemonKeys[i]]);
  }
  return localArray;
};

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = {};
  _pokemons = pokemons;
  PokemonStore.__emitChange();
};

PokemonStore.find = function(id) {
  return _pokemons[id - 1];
};

PokemonStore._singlePokemon = function () {
  PokemonStore.__emitChange();
  return _singlePokemon;
};

PokemonStore.singlePokemonUpdate = function(pokemon) {
  _singlePokemon = pokemon;
  console.log(_singlePokemon);
  PokemonStore.__emitChange();
};



PokemonStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case PokemonConstants.POKEMONS_RECEIVED:
    PokemonStore.resetPokemons(payload.pokemons);
    break;

  case PokemonConstants.POKEMON_RECEIVED:
    PokemonStore.singlePokemonUpdate(payload.pokemon);
    break;
  }
};

module.exports = PokemonStore;

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var App = require('./components/app');
var PokemonDetail = require('./components/pokemons/pokemonDetail');
var HashHistory = require('react-router').hashHistory;
var ToyDetail = require('./components/toys/toyDetail');


var PokemonsIndex = require('./components/pokemons/PokemonsIndex');
document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={HashHistory}>
      <Route path="/" component={App}>
        <Route path="pokemon/:pokemonId" component={PokemonDetail}>
          <Route path="toys/:toyId" component={ToyDetail} />
        </Route>
      </Route>
    </Router>,
   document.getElementById('root'));
});

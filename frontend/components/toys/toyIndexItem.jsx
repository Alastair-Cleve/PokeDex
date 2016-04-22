var React = require('react');
var HashHistory = require('react-router').hashHistory;


var ToyIndexItem = React.createClass({
  onClick: function(event){
    HashHistory.push("pokemon/" + this.props.params.pokemonId + "/toys/" + this.props.toy.id);
  },

  render: function() {
    return (
      <li className="toy-list-item" onClick={this.onClick}>
        <p>Name: {this.props.toy.name}</p>
        <p>Happiness: {this.props.toy.happiness}</p>
        <p>Price: {this.props.toy.price}</p>
      </li>
    );
  }
});

module.exports = ToyIndexItem;

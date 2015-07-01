var React = require('react');
var Reflux = require('reflux');
var ConceptRequestActions = require('../actions/ConceptRequestActions');
var ConceptRequestStore = require('../stores/ConceptRequestStore');

var Concept = React.createClass({

  mixins: [Reflux.listenTo(ConceptRequestStore, 'ConceptRequestStore')],

  render: function() {
    return (
      <a href="#" onClick={ConceptRequestActions.request} className="list-group-item">
        <h4 className="list-group-item-heading">{this.props.name}</h4>
        <p className="list-group-item-text"
          dangerouslySetInnerHTML={{__html: this.props.description}}></p>
      </a>
    )
  }
});

module.exports = Concept;
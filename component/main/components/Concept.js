var React = require('react');
var Reflux = require('reflux');
var ConceptRequestActions = require('../actions/ConceptRequestActions');
var ConceptRequestStore = require('../stores/ConceptRequestStore');

var Concept = React.createClass({

  mixins: [Reflux.listenTo(ConceptRequestStore, 'ConceptRequestStore')],

  handleConceptRequest: function() {
    ConceptRequestActions.request(this.props.id);
  },

  render: function() {
    return (
      <a href="#" onClick={this.handleConceptRequest} className="list-group-item">
        <h4 className="list-group-item-heading">{this.props.name}</h4>
        <p className="list-group-item-text"
          dangerouslySetInnerHTML={{__html: this.props.description}}></p>
      </a>
    )
  }
});

module.exports = Concept;
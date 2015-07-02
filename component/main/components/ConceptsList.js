var React = require('react');
var Reflux = require('reflux');
var Concept = require('./Concept');
var $ = require('jquery');

var ConceptRequestStore = require('../stores/ConceptRequestStore');
var ldConceptsEndpoint = 'http://ponyboy.dev:8000/api/publicConcept?id=7';

var ConceptsList = React.createClass({

  mixins: [Reflux.listenTo(ConceptRequestStore, 'ConceptRequestStore')],

  getInitialState: function () {
    return {
      concepts: []
    };
  },

  componentDidMount: function () {
    $.get(ldConceptsEndpoint, function (ldConcept) {
      if (this.isMounted()) {
        console.log(ldConcept);
        this.setState({
          concepts: [ldConcept]
        });
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div className="list-group">
              { this.state.concepts.map(function (c) {
                return <Concept name={c.name} description={c.description} />;
              })}
      </div>
    );
  }
});

module.exports = ConceptsList;

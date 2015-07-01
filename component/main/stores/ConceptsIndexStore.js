var Reflux = require('reflux');
var ConceptsIndexActions = require('../actions/ConceptsIndexActions');

var data = [];

var ConceptsIndexStore = Reflux.createStore({

  listenables: [ConceptsIndexActions],

  init: function() {
    console.log('ConceptsIndexStore initialized');
    // This function will be called when the store will be first initialized
  },

  index: function() {
    console.log('Show concepts!');
  }

});

module.exports = ConceptsIndexStore;

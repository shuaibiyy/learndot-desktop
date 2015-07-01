var Reflux = require('reflux');
var ConceptRequestActions = require('../actions/ConceptRequestActions');

var data = [];

var ConceptRequestStore = Reflux.createStore({

  listenables: [ConceptRequestActions],

  init: function() {
    console.log('ConceptRequestStore initialized');
    // This function will be called when the store will be first initialized
  },

  request: function() {
    console.log('Go to concept!');
  }

});

module.exports = ConceptRequestStore;

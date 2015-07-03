var Reflux = require('reflux');
var ConceptRequestActions = require('../actions/ConceptRequestActions');
var remote = window.require('remote');
var BrowserWindow = remote.require('browser-window');

var data = [];

var ConceptRequestStore = Reflux.createStore({

  listenables: [ConceptRequestActions],

  init: function () {
    console.log('ConceptRequestStore initialized');
    // This function will be called when the store will be first initialized
  },

  request: function (id) {
    console.log('Go to concept: ' + id);

    var conceptWindow = new BrowserWindow({width: 1024, height: 768});
    var url = 'http://crazyhorse.dev:8001/p/concept/' + id;
    conceptWindow.loadUrl(url);

    conceptWindow.on('closed', function () {
      conceptWindow = null;
    });
  }
});

module.exports = ConceptRequestStore;

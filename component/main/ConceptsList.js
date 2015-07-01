var React = require('react');

var ConceptsList = React.createClass({
    render: function() {
        return (
            <div className="list-group">
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">Espresso Basics</h4>
                <p className="list-group-item-text">This module will teach you how to go from zero to one in espresso making.</p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">Espresso Advanced</h4>
                <p className="list-group-item-text">This module takes you further down the rabbit hole of espresso expertise</p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">Espresso Expert</h4>
                <p className="list-group-item-text">Here you transcend plebs and become a king barista</p>
              </a>
            </div>
        );
    }
});

module.exports = ConceptsList;

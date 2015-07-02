var React = require('react');
var ConceptsList = require('./components/ConceptsList');
var Footer = require('./components/Footer');

var Main = React.createClass({
    displayName: 'Main',
    render: function() {
        return (
            <div>
                <h1>Learndot Desktop</h1>
                <ConceptsList />
                <Footer />
            </div>
        );
    }
});

module.exports = Main;

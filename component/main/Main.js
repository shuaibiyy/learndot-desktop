var React = require('react');
var ConceptsList = require('./ConceptsList');

var Main = React.createClass({
    displayName: 'Main',
    render: function() {
        return (
            <div>
                <h1>Learndot Desktop</h1>
                <ConceptsList />
            </div>
        );
    }
});

module.exports = Main;

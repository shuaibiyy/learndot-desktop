(function() {
    var React = require( 'react' ),
        Main = require( './main/Main.js' ),
        remote = window.require( 'remote' );

    window.React = React;

    React.render(<Main />, document.body);
})();

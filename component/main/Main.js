var React = require('react');
var ConceptsList = require('./components/ConceptsList');
var Footer = require('./components/Footer');

var Main = React.createClass({
  displayName: 'Main',
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img src="http://uploads.webflow.com/54c82c87a97006f114a9020d/54c82e09c794d6f3145b37e5_learndot-white.png" />
              </a>
            </div>
            <div className="collapse navbar-collapse" classId="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#">004</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1>Courses</h1>
        <ConceptsList />
        <Footer />
      </div>
    );
  }
});

module.exports = Main;

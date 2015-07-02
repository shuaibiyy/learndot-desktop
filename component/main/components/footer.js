var React = require('react');

var Footer = React.createClass({

  render: function () {
    return (
      <footer className="sticky-footer">
        <div className="row">
          <div className="large-7 large-centered columns text-center">
            <i className="spacer-icon"></i>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
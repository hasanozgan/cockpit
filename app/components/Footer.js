var React = require('react');

var Footer = React.createClass({
  render: function () {
    return (
      <footer className='layout-footer'>
        <div className='container'>
          <div className='text-center'>&copy; 2015 Cockpit</div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;

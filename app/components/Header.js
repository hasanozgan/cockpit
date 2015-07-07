var React = require('react');
var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route
  , {Link} = Router;
var ReactBootstrap = require('react-bootstrap')
  , Nav = ReactBootstrap.Nav
  , Navbar = ReactBootstrap.Navbar
  , NavItem = ReactBootstrap.NavItem
  , MenuItem = ReactBootstrap.MenuItem
  , DropdownButton = ReactBootstrap.DropdownButton;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink
  , ButtonLink = ReactRouterBootstrap.ButtonLink
  , ListGroupItemLink = ReactRouterBootstrap.ListGroupItemLink;

var logoImg = require('../assets/images/logo.svg');

var Brand = (
  <a className="navbar-brand" href="#">Cockpit</a>
);

var Header = React.createClass({

  render: function () {


    return (
      <Navbar brand={Brand}>
        <Nav>
          <NavItem eventKey={1} href='#'>Link</NavItem>
          <NavItem eventKey={2} href='#'>Link</NavItem>
          <NavItemLink to="page-nested" eventKey={2} href='#'>Hede</NavItemLink>
          <DropdownButton eventKey={3} title='Dropdown'>
            <MenuItem eventKey='1'>Action</MenuItem>
            <MenuItem eventKey='2'>Another action</MenuItem>
            <MenuItem eventKey='3'>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='4'>Separated link</MenuItem>
          </DropdownButton>
        </Nav>
      </Navbar>

    );
  }
});

module.exports = Header;

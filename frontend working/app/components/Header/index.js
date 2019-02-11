import React from 'react';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/addstring">
            <h4>Add String</h4>
          </HeaderLink>
          <HeaderLink to="/showstrings">
            <h4>Show Strings</h4>
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;

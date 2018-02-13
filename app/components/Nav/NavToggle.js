import React from 'react';
import PropTypes from 'prop-types';

const NavToggle = ({ onClick }) => (
  <span className="navbar-burger burger" onClick={onClick}>
    <span />
    <span />
    <span />
  </span>
);

NavToggle.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default NavToggle;

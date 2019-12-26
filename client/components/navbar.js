import React from 'react'
import PropTypes from 'prop-types'

export const Navbar = () => (
  <nav id="navbar">
    <div className="nav-item">
      <img src="/images/cm-logo-icon-wht.png" className="logo action" />
    </div>
  </nav>
)

/**
* PROP TYPES
*/
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

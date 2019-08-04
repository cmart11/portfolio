import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Navbar, Message } from './index'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div>
      <div className="header-content" style={{ backgroundColor: "black" }}>
        <Navbar />
        <section>
          <Message />
        </section>

      </div>
      <div className="icons">
        <div className="icon">
          <a href="https://www.github.com/cmart11" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-icon.jpg" alt="Github" className="action" />
          </a>
        </div>
        <div className="icon linkedin-icon">
          <a href="https://www.linkedin.com/in/crismartinez1/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-icon.png" alt="Linkedin" className="action" />
          </a>
        </div>
      </div>

    </div>

  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

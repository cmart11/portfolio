import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Navbar, Message, Cursor } from './index'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div className="header-content" style={{ backgroundColor: "black" }}>
      <Cursor />
      <Navbar />
      <section>
        <Message />
      </section>
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

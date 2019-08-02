import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Navbar } from './index'

/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "red" }}>
      <Navbar />
      <h1>Cristian</h1>
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

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { UserHome } from './components'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {

    return (
      <Switch>
        <Route path="/" component={UserHome} />
      </Switch>
    )
  }
}

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

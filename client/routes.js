import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { UserHome } from './components'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  componentDidMount() {
  }

  render() {

    return (
      <Switch>
        <Route path="/" component={UserHome} />
      </Switch>
    )
  }
}


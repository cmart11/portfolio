import React, { Fragment } from 'react'
import { Navbar, Message, Projects, Icons, ToggleSwitch } from './index'

export const UserHome = () => {
  return (
    <Fragment>
      <div className="header-content site-wrapper" >
        <Navbar />
        <ToggleSwitch />
        <Message />
        <Icons />
      </div>
      <Projects />
    </Fragment>
  )
}

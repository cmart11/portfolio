import React from 'react'
import { Navbar, Message, Projects, Icons, ToggleSwitch } from './index'

export const UserHome = () => {
  return (
    <React.Fragment>
      <div className="header-content site-wrapper" >
        <Navbar />
        <ToggleSwitch />
        <Message />
        <Icons />
      </div>
      <Projects />
    </React.Fragment>
  )
}

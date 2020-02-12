import React, { Fragment } from 'react'
import { Logo, Message, Projects, Icons, ToggleSwitch } from './index'

export const UserHome = () => {
  return (
    <Fragment>
      <div className="header-content site-wrapper" >
        <Logo />
        {/* <ToggleSwitch /> */}
        <Message />
        <Icons />
      </div>
      <Projects />
    </Fragment>
  )
}

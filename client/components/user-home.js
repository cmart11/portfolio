import React from 'react'
import PropTypes from 'prop-types'

import { Navbar, Message, Projects, Footer } from './index'

/**
 * COMPONENT
 */
export const UserHome = () => {
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
        {/* <div className="icon top">
          <a style={{ color: "#fff", marginLeft: "200px" }} href="#bottom">Projects</a>
        </div> */}
      </div>
      <Projects />
      {/* <Footer /> */}
    </div>
  )
}

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

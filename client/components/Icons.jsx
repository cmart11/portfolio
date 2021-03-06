import React from 'react'

export const Icons = props => {
    return (
        <div className="icons" id="icons">
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
    )
}

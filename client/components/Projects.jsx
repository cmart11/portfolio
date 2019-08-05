import React from 'react'

export default function Projects() {
    return (
        <div>
            <div id="projects-title">
                <h2>PROJECTS</h2>
            </div>
            <div className="projects-content">
                <div className="project project-1">
                    <div className="img">
                        <img src="/images/nak-logo-wht-2.png" alt="Nak logo" />
                    </div>
                    <p>Nak is a productivity platform meant to better organize browser tabs. This project consists of a Chrome extension that works in combination with a single-page web app. Users see a list of open tabs on our extension and add tabs to a collection on the website.</p>
                    <div className="project-links">
                        <a
                            href="http://nak-tabs.herokuapp.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="project-links btn-nak"
                        >Visit
                        </a>
                        <a
                            href="https://github.com/kilo-finch/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="project-links btn-nak">
                            Github
                            <img src="/images/github-icon.jpg" alt="Github logo" />
                        </a>
                    </div>
                </div>
                <div className="project project-2">
                    <div className="img img-2">
                        <img src="/images/fmu-logo-wht.png" alt="Funk Me Up logo" />
                    </div>
                    <p>Funk Me Up is a Javascript based fullstack application that expands upon Spotify's current playlist generating features. Users can intuitively create playlists based on the current track they're listening to on any of their devices and post the playlist to their Spotify account.</p>
                    <div className="project-links">
                        <a
                            href="http://funkmeup.herokuapp.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="project-links btn-fmu"
                        >
                            Visit
                        </a>
                        <a
                            href="https://github.com/cmart11/funk-me-up"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="project-links btn-fmu">
                            Github
                            <img src="/images/github-icon.jpg" alt="Github logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

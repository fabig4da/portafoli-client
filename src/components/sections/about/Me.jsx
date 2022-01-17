import React from 'react'
import { Link } from 'react-router-dom'
import { getLocalImages, sectionIds } from '../../../helpers/helpers'

export const Me = () => {
    return (
        <div className="about-me" id={sectionIds.aboutME}>
            <div className="about-content">
                <div className="me-img">
                    <img src={getLocalImages('./perfil.png')} alt=""/>
                </div>
                <div className="me-ingormation">
                    <h2>Cesar Fabian Garces G</h2>
                    <h3>System Ingeneer</h3>
                    <h3>Full stack web developer</h3>
                </div>
                <div className="social-network">
                    <Link to="/" className="facebook">
                        <i className="fab fa-facebook-square"></i>
                    </Link>
                    <Link to="/" className="youtube">
                        <i className="fab fa-youtube-square"></i>
                    </Link >
                    <Link to="/" className="linkedin">
                        <i className="fab fa-linkedin"></i>
                    </Link >

                </div>

            </div>
        </div>
    )
}

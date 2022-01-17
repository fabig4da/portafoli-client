import React from 'react'
import { getLocalImages, sectionIds } from '../../../helpers/helpers'

export const Websites = () => {
    return (
        <div className="web-sites w-100" id={sectionIds.works}>
            <div className=" web-title">
                <h2>WEBSITES</h2>
            </div>
            <p className="gl-intro">I have created the websites below</p>
            <div className="web-sites-container">
                <div className="web-site-item">
                    <img src={getLocalImages('./ieti.JPG')} alt=""/>
                    <div className="ws-cover">
                        <h2>School website</h2>
                        <p>Lorem ipsum dolor sit ente repudiandae hic, saepe non ut! Quam quisquam blanditiis iusto.</p>
                        <h4>Build on:</h4>
                        <ul>
                            <li>PHP</li>
                            <li>SASS</li>
                            <li>MYSQL</li>
                        </ul>
                        <a className="btn" href="https://ietigerardovalenciacano.edu.co/usuario/wlogin" rel="noreferrer" target="_BLANK">Visit website</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

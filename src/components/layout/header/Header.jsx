import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import images from '../../../assets/images/logo.png';
import { getElementPositioY, goToSectionY, sectionIds } from '../../../helpers/helpers';

export const Header = () => {
    const [item] = useState([
        { val: 'Templates', id: sectionIds.templates },
        { val: 'Skills', id: sectionIds.skills },
        { val: 'Projects', id: sectionIds.works },
        { val: 'About me', id: sectionIds.aboutME }
    ])
    const menu = useRef()
    const handleMenu = () => {
        menu.current.classList.toggle('nav-in')
    }

    const moveTo = (id) => {
        let postitioY = getElementPositioY(id);
        goToSectionY(postitioY);
        menu.current.classList.contains('nav-in') && menu.current.classList.toggle('nav-in');
    }
    return (
        <header className="header fov-center">
            <Link to='/' >
                <img className="logo" src={images} alt="logo" />
            </Link>
            <nav className="nav fov-center" ref={menu}>
                {item.map(({ val, id }) => (
                    <a
                        id="S"
                        key={val}
                        onClick = {()=>moveTo(id)}
                    >
                        {val}
                    </a>
                ))}

            </nav>
            <span className='mbtn' onClick={handleMenu}>

            </span>
        </header>
    )
}

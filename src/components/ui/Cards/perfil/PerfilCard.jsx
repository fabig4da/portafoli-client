import React, { useEffect, useState } from 'react';
import { getLocalImages } from '../../../../helpers/helpers';
import './styles.scss';

export const PerfilCard = () => {
    const [show, setShow] = useState(false);

    const hide = () => {
        setShow(false)
    }

    useEffect(() => {
        setTimeout(() => {
            // window.scrollTo(0, 0 -{{,{}}})
            document.body.classList.add('alert-global-active')
            return setShow(true)
        }, 2000)

        console.log(document.body);
    }, [])

    useEffect(() => {
        if (!show) {
            document.body.classList.remove('alert-global-active')
        }
    }, [show])

    return (
        <>
            {
                show &&
                < div className="pc-container">
                    <div className="card-perfil">
                        <div className="cp-header w-100">
                            <i className="fas fa-times" onClick={hide}></i>
                        </div>
                        <div className="cp-body w-100">
                            <img src={getLocalImages('./perfil.png')} alt="" />
                            <p>Hi, My name is <span>Fabian Garces</span>, I'm a full stack web developer and this is my services briefcase</p>
                            <button className="btcp">Contact Me</button>
                        </div>

                    </div>

                </div>
            }
        </>
    )
}

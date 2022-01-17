import React from 'react'
import { getLocalImages } from '../../../helpers/helpers';
// import { AnimateCircles } from '../../ui/Circles/AnimateCircles';
import { AnimationPack } from '../../ui/Circles/AnimationPack';
export const Portada = () => {
    return (
        <div className="portada">
            <AnimationPack cant={200} />
            <div className="portada-title">
                <h2 >Resposive Web Design</h2>
                {/* <div className="btn btn-blue W-100">
                    I'm interested
                </div> */}
            </div>
            <div className="devices-img">
                <img src={getLocalImages('./res.png')} alt="mobile" className="mobile" />
            </div>

        </div>
    )
}

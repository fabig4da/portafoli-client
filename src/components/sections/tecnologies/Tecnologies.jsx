import React from 'react'
import { getLocalImages, sectionIds } from '../../../helpers/helpers'
const tech = [
    {
        img: 'html',
        color: 'E44D26',
        name: 'html'
    },
    {
        img: 'js',
        color: 'D6BA32',
        name: 'javascript'
    },
    {
        img: 'css',
        color: '0C73B8',
        name: 'css3'
    },
    {
        img: 'react',
        color: '61DAFB',
        name: 'react'
    },
]
export const Tecnologies = () => {
    return (
        <div className="tec-group" id={sectionIds.skills}>
            <img className="tec-title" src={getLocalImages('./tech.png')} alt="Technologies title" />
            <p className="gl-intro">In this section you can find different technologies that I have learned, i've been improving skills in all of them</p>
            <div className="tec-item-content flex-wrap">
                {
                    tech.map(value => {
                        return (
                            <div className="tec-item" key={value.img}>
                                <div className="tec-img-c fov-center">
                                    <img src={getLocalImages(`./${value.img}.png`)} alt="react logo" />
                                </div>
                                <div className="tec-item-cover" style={{ background: `#${value.color}` }}>
                                    {value.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

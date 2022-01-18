import React from 'react'
import { useQuery } from 'react-query';
import { workRepository } from '../../../repository/work';

import { sectionIds } from '../../../helpers/helpers'

export const Websites = () => {

    const { isLoading, data } = useQuery('works', workRepository.findAll)

    console.log(data);

    return (
        <div className="web-sites w-100" id={sectionIds.works}>
            <div className=" web-title">
                <h2>WEBSITES</h2>
            </div>
            <p className="gl-intro">I have created the websites below</p>
            <div className="web-sites-container">
                {
                    !isLoading && data.data.data.map(web => (
                        <div className="web-site-item" key={web._id}>
                            <img src={web.img} alt="" />
                            <div className="ws-cover">
                                <h2>{web.title}</h2>
                                <p>{web.description}</p>
                                <h4>Build on:</h4>
                                <ul>
                                    <li>PHP</li>
                                    <li>SASS</li>
                                    <li>MYSQL</li>
                                </ul>
                                <a className="btn" href={web.url} rel="noreferrer" target="_BLANK">Visit website</a>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

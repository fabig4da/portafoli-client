import React from 'react'
import { useQuery } from 'react-query';
import { workRepository } from '../../../repository/work';
import {Spinner} from '../../ui/Spinner';

import { sectionIds } from '../../../helpers/helpers'

export const Websites = () => {

    const { isLoading, data } = useQuery('works', workRepository.findAll)
    
    if(isLoading) return <Spinner />
    return (
        <div className="web-sites w-100" id={sectionIds.works}>
            <div className=" web-title">
                <h2>Projects</h2>
            </div>
            <p className="gl-intro">I'm the author of the following projects</p>
            <div className="web-sites-container">
                {
                    !isLoading && data.data.data.map(web => (
                        <div className="web-site-item" key={web._id}>
                            <img src={web.img} alt="" />
                            <div className="ws-cover">
                                <h2>{web.title}</h2>
                                <p>{web.description}</p>
                                <h4>Build on:</h4>
                                <div>
                                    {web.technologies[0]}
                                </div>

                                <a className="btn" href={web.url} rel="noreferrer" target="_BLANK">Visit website</a>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

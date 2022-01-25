import React from 'react'
import { sectionIds } from '../../../helpers/helpers'
import { useQuery } from 'react-query';
import { templateRepository } from '../../../repository/template';
import { Spinner } from '../../ui/Spinner';

export const Templates = () => {
    const { isLoading, error, data } = useQuery('techs', templateRepository.findAll)
    // console.log(data)
    if (isLoading) return <Spinner />;

    return (
        <div className="templetes fov-center w-100" id={sectionIds.templates}>
            <div className=" tp-title">
                <h2>Templates</h2>
            </div>
            <p className="gl-intro">Here are some templates that I have created for different purposes</p>
            <div className="templetes-content flex-wrap gap">
                {
                    data.data.data.map((template) => (
                        <div className="tp-img" key={template._id}>
                            <img src={template.img} alt="" />
                            <div className="tp-img-cover fov-center">
                                <h3>{template.title}</h3>
                                <button className="btn">
                                    <a href={template.url} target='_blank'>GO</a>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Charging, ContainerScrollY, IconButton, NavButton } from '../../components/ui'
import { deleteItem, goToEdit } from '../../helpers/components'
import { workRepository } from '../../repository/work'

export const Works = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, data } = useQuery('works', workRepository.findAll)
    const mutation = useMutation(data => workRepository.delete(data.tid))

    if (isLoading) return <Charging />
    if (mutation.isLoading) return <Charging />

    return (
        <>

            <NavButton 
                onClick={()=>navigate('/dashboard/creat_works')}
            >
                <i className="fas fa-plus"></i>
                Create
            </NavButton>
            <ContainerScrollY>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Url</th>
                            <th scope="col">Description</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !isLoading && data.data.data.map(template => (
                                <tr>
                                    <td><img src={template.img} alt="" width="100px" /></td>
                                    <td>{template.title}</td>
                                    <td>{template.url}</td>
                                    <td>{template.description}</td>
                                    <td>
                                        <IconButton
                                            onClick={() => goToEdit(template, dispatch, navigate, '/dashboard/edit_works')}
                                        >
                                            <i class="fas fa-edit"></i>
                                        </IconButton>
                                        <IconButton
                                            bcolor='red'
                                            onClick={() => deleteItem(template._id, mutation, dispatch, 'Work delete sucessfuly', 'Error deleting work')}
                                        >
                                            <i class="fas fa-trash-alt"></i>
                                        </IconButton>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>

            </ContainerScrollY>
        </>

    )
}

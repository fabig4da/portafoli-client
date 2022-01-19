import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ContainerScrollY, IconButton, NavButton } from '../../components/ui'
import { deleteItem, goToEdit } from '../../helpers/components'
import { templateRepository } from '../../repository/template'


export const Template = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, data } = useQuery('templates', templateRepository.findAll)
    const mutation = useMutation(data => templateRepository.delete(data.tid))


    return (
        <>

            <NavButton onClick={()=>navigate('/dashboard/create_template')}>
                <i class="fas fa-plus"></i>
                Create
            </NavButton>
            <ContainerScrollY>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Url</th>
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
                                    <td>
                                        <IconButton 
                                        onClick={()=>goToEdit(template, dispatch, navigate, '/dashboard/edit_template')}
                                        >
                                            <i class="fas fa-edit"></i>
                                        </IconButton>
                                        <IconButton
                                            bcolor='red'
                                            onClick={() => deleteItem(template._id, mutation, dispatch, 'Templete delete sucessfuly', 'Error deleting template')}
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

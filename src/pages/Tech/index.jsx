import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { Charging, ContainerScrollY, IconButton, NavButton } from '../../components/ui'
import { techRepository } from '../../repository/tech'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";


import { _addTemp, _errorMessage, _succesMessage } from '../../Redux/actions';



export const Tech = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, data } = useQuery('techs', techRepository.findAll)
    const mutation = useMutation(data => techRepository.delete(data.tid))

    const deleteTech = async (tid) => {
        const confirm = window.confirm("Are you sure you wan't to delete this item");
        if (confirm) {
            mutation.mutate({ tid }, {
                onSuccess: async () => {
                    return dispatch(_succesMessage('Tech deleted successfuly'))
                },
                onError: async () => {
                    return dispatch(_errorMessage('Error deleting a new tech'))
                }
            });
        }
    }

    const goToEdit = (user) => {
        dispatch(_addTemp(user));
        navigate('/dashboard/edit_tech');
    }

    if (isLoading) return <Charging />
    if (mutation.isLoading) return <Charging />

    return (
        <>
            <NavButton onClick={() => navigate('/dashboard/create_tech')}>
                <i className="fas fa-plus"></i>
                Create
            </NavButton>
            <ContainerScrollY>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Color</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !isLoading && data.data.data.map(tech => (
                                <tr>
                                    <td><img src={tech.img} alt="" width="80px" height='70px' /></td>
                                    <td>{tech.name}</td>
                                    <td>{tech.color}</td>
                                    <td>
                                        <IconButton onClick={() => goToEdit(tech)} >
                                            <i className="fas fa-edit"></i>
                                        </IconButton>
                                        <IconButton
                                            bcolor='red'
                                            onClick={async () => await deleteTech(tech._id)}
                                        >
                                            <i className="fas fa-trash-alt"></i>
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

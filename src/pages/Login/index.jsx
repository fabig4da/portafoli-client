import {useMutation} from 'react-query';

import { useInputs } from '../../hook/useInput'
import { InputText } from '../../components/ui/Input'
import { Container } from '../../components/ui/Container';
import { userRepository } from '../../repository/user';
import {Charging} from '../../components/ui'
import { useNavigate } from 'react-router-dom';
import { _errorMessage, _login } from '../../Redux/actions';
import { useDispatch } from 'react-redux';


export const Login = () => {
    const navigate =  useNavigate();
    const dispatch = useDispatch();
    const {mutate, isLoading} = useMutation(data=>userRepository.logIn(data));
    const {data, parseInput, inputOk} = useInputs();
    const hadleSubmit = (event)=>{
        event.preventDefault();
        mutate(data, {
            onSuccess: async ({data:{ok, ...resto}}) => {
                if(ok){
                    dispatch(_login(resto.data))
                    navigate('/dashboard')
                }else{
                    dispatch(_errorMessage('User or password incorrect'))
                }
                // return dispatch(_login(successMessage))
            },
            onError: async (error) => {
                dispatch(_errorMessage('An Error has occured, try again'))
                // return dispatch(_login(successMessage))
            }
        })
    }
    if(isLoading) return <Charging />
    return (
        <Container>

            <form className="form" onSubmit={hadleSubmit}>
                <InputText name="email" label="Ingrese su email" parseInput={parseInput} type="email" />
                <InputText name="password" label="Ingrese su contraseña" parseInput={parseInput} type="password" />
                <button type={'submit'} disabled={!inputOk}>Sign In</button>
            </form>
        </Container>
    )
}
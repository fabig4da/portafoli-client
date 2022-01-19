import { useInputs } from '../../hook/useInput'
import { InputText } from '../../components/ui/Input'
import { Container } from '../../components/ui/Container';


export const Login = () => {
    const {data, parseInput, inputOk} = useInputs();
    const hadleSubmit = (event)=>{
        event.preventDefault();
        console.log(data)
    }

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
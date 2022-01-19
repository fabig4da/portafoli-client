import { Charging, Form } from "../../components/ui";
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { techRepository } from '../../repository/tech';
import { useDispatch } from "react-redux";
import { _errorMessage, _succesMessage } from "../../Redux/actions";


export const CreateTech = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const { mutate, isLoading, isError, isSuccess } = useMutation(data => techRepository.create(data))
    const onSubmit = data => {      
        mutate(data, {
            onSuccess: async()=>{
                dispatch(_succesMessage('New tech saved'))
            },
            onError: async()=>{
                dispatch(_errorMessage('Error saving a new tech'))
            },
        })
    };

    

    if (isLoading) return <Charging />
    // if (isError) return <div>Error saving a new tech</div>
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {
                // isSuccess && <div className="alert alert-success">New tech saved</div>
            }
            <div class="mb-3">
                <label for="name" className="form-label">Tech Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="tech name"
                    {...register("name", { required: true })} />
            </div>
            <div class="mb-3">
                <label for="formFile" class="form-label">Tech Icon</label>
                <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    {...register("img", { required: true })} />
            </div>
            <label for="exampleColorInput" className="form-label">Color picker</label>
            <input
                type="color"
                class="form-control form-control-color"
                id="exampleColorInput"
                title="Choose your color"
                {...register("color", { required: true })} />
            <br />
            <button className="btn btn-primary">Save</button>

        </Form>

    );
}
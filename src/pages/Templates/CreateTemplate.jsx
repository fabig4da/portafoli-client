import { Charging, Form } from "../../components/ui";
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { templateRepository } from '../../repository/template';
import { useDispatch } from "react-redux";
import { _errorMessage, _succesMessage } from "../../Redux/actions";


export const CreateTemplate = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const { mutate, isLoading } = useMutation(data => templateRepository.create(data))
    const onSubmit = data => {      
        mutate(data, {
            onSuccess: async()=>{
                dispatch(_succesMessage('New template saved'))
            },
            onError: async()=>{
                dispatch(_errorMessage('Error saving a new template'))
            },
        })
    };

    

    if (isLoading) return <Charging />
    // if (isError) return <div>Error saving a new tech</div>
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
                <label for="title" className="form-label">Template title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Template title"
                    {...register("title", { required: true })} />
            </div>
            <div class="mb-3">
                <label for="formFile" class="form-label">Tech Icon</label>
                <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    {...register("img", { required: true })} />
            </div>
            <label for="url" className="form-label">Template url</label>
                <input
                    type="url"
                    className="form-control"
                    id="url"
                    placeholder="Template url"
                    {...register("url", { required: true })} />
            <br />
            <button className="btn btn-primary">Save</button>

        </Form>

    );
}
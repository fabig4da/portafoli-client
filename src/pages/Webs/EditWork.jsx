import { Charging, Form } from "../../components/ui";
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { workRepository } from '../../repository/work';
import { useSelector } from "react-redux";
import { saveOrUpdateItem } from "../../helpers/components";
import { useDispatch } from "react-redux";


export const EditWork = () => {
    const dispatch = useDispatch();
    const { data: temp } = useSelector(state => state.tmp);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: temp.title,
            url: temp.url,
            description: temp.description
        }
    });

    const { mutate, isLoading } = useMutation(data => workRepository.update(temp._id, data))
    const onSubmit = data => {
        // console.log(data);
        saveOrUpdateItem(data, mutate, dispatch, 'Chages saved', 'Error editing template');
    };

    if (isLoading) return <Charging />
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
                <label for="title" className="form-label">Web title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Web title"
                    {...register("title")} />
            </div>
            <div class="mb-3">
                <label for="formFile" class="form-label">Tech Icon</label>
                <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    {...register("img")} />
            </div>
            
            <label for="description" className="form-label">Web description</label>
            <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Web description"
                {...register("description" )} />

            <label for="technologies" className="form-label">Web technologies</label>
            <input
                type="text"
                className="form-control"
                id="technologies"
                placeholder="Web technologies"
                name="technologies[]"
                {...register("technologies" )} />
                
            <label for="url" className="form-label">Web url</label>
                <input
                    type="url"
                    className="form-control"
                    id="url"
                    placeholder="Web url"
                    {...register("url", { required: true })} />
            <br />
            <button className="btn btn-primary">Save</button>

        </Form>

    );
}
import { Charging, Form } from "../../components/ui";
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { templateRepository } from '../../repository/template';
import { useSelector } from "react-redux";
import { saveOrUpdateItem } from "../../helpers/components";
import { useDispatch } from "react-redux";


export const EditTemplate = () => {
    const dispatch = useDispatch();
    const { data: temp } = useSelector(state => state.tmp);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: temp.title,
            url: temp.url

        }
    });

    const { mutate, isLoading} = useMutation(data => templateRepository.update(temp._id, data))
    const onSubmit = data => {
        // console.log(data);
        saveOrUpdateItem(data, mutate, dispatch, 'Chages saved', 'Error editing template');
    };

    if (isLoading) return <Charging />
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
                    {...register("img")} />
            </div>
            <label for="url" className="form-label">Template url</label>
            <input
                type="text"
                className="form-control"
                id="url"
                placeholder="Template url"
                {...register("url", { required: true })} />
            <br />
            <button className="btn btn-primary">Save</button>

        </Form>

    );
}
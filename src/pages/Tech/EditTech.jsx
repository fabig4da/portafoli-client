import { Charging, Form } from "../../components/ui";
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { techRepository } from '../../repository/tech';
import { useSelector, useDispatch } from "react-redux";
import { saveOrUpdateItem } from "../../helpers/components";

export const EditTech = () => {

    const dispatch = useDispatch();

    const { data: temp } = useSelector(state => state.tmp);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: temp.name,
            color: temp.color

        }
    });

    const { mutate, isLoading, isError, isSuccess } = useMutation(data => techRepository.update(temp._id, data))
    const onSubmit = data => {
        // console.log(data);

        saveOrUpdateItem(data, mutate, dispatch, 'Chages saved', 'Error editing tech');
    };

    if (isLoading) return <Charging />
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("img")} />
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
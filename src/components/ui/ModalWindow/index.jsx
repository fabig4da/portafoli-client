import { useDispatch, useSelector } from "react-redux";

import { Modal } from "..";
import {_deleteMessage} from "../../../Redux/actions/messageAction";

export const ModalWindow = () => {
    const dispatch = useDispatch();
    const message = useSelector(state => state.message);

    const close = ()=>dispatch(_deleteMessage())

    return (
        <Modal>
            {
                message.msg &&
                <div className={(message.type && message.type==='error') ? 'alert alert-danger' : 'alert alert-success' }>
                    <span onClick={() => close()}>
                        <i className="fas fa-times"></i>
                    </span>
                    {message.msg}
                </div>
            }

        </Modal>
    )
};
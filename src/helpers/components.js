import { _addTemp, _errorMessage, _succesMessage } from "../Redux/actions";

export const deleteItem = async (tid, mutation,dispatch, successMessage, errorMessage) => {
    const confirm = window.confirm("Are you sure you wan't to delete this item");
    if (confirm) {
        mutation.mutate({ tid }, {
            onSuccess: async () => {
                return dispatch(_succesMessage(successMessage))
            },
            onError: async () => {
                return dispatch(_errorMessage(errorMessage))
            }
        });
    }
}

export const saveOrUpdateItem = async (data, mutate,dispatch, successMessage, errorMessage) => {
    if (typeof data === 'string') {
        mutate({ tid:data }, {
            onSuccess: async () => {
                return dispatch(_succesMessage(successMessage))
            },
            onError: async () => {
                return dispatch(_errorMessage(errorMessage))
            }
        });
    }else{
        mutate(data, {
            onSuccess: async () => {
                return dispatch(_succesMessage(successMessage))
            },
            onError: async () => {
                return dispatch(_errorMessage(errorMessage))
            }
        });
    }
}

export const goToEdit = (user, dispatch, navigate, path) => {
    dispatch(_addTemp(user));
    navigate(path);
}
import { types } from "../types";

const initialState = {
    logged: false,
    data: {}
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.profile:
            state = {
                logged: true,
                data: action.payload
            }
            return state;
        default:
            return state;
    }
}

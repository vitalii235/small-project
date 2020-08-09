import {AUTH} from "../types";

const initialState = {
    permission:true,
    token:''
}
export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH: {
            return {...state, permission: !state.permission}
        }
        default:
            return state
    }
}
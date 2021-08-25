import { ActionTypes } from "./actions";

const initialState = {
    user: {},
}

export const userReducer = (state = initialState, action: { type: ActionTypes, payload: any }) => {
    switch (action.type) {
        case ActionTypes.PUT_USER:
            return {
                ...state,
                user: action.payload,
            }
        case ActionTypes.REMOVE_USER:
            return {
                ...state,
                user: {},
            }
        default: 
            return state;
    }
}
import { ActionTypes } from "./actions";

const initialState = {
    messages: [],
}

export const messagesReducer = (state = initialState, action: { type: ActionTypes, payload: any }) => {
    switch (action.type) {
        case ActionTypes.PUT_MESSAGES:
            return {
                ...state,
                messages: action.payload,
            }
        case ActionTypes.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            }
        default:
            return state;
    }
}
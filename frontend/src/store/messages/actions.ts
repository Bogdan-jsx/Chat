export enum ActionTypes {
    PUT_MESSAGES = "PUT_MESSAGES",
    ADD_MESSAGE = "ADD_MESSAGE",
}

export interface MessageType {
    message: string,
    sendTime: Date,
    authorName: string,
    authorId: string,
}

export const putMessages = (messages: MessageType[]) => {
    return {
        type: ActionTypes.PUT_MESSAGES,
        payload: messages,
    }
}

export const addMessage = (message: MessageType) => {
    return {
        type: ActionTypes.ADD_MESSAGE,
        payload: message,
    }
}

export const loadMessages = () => (dispatch: any) => {
    fetch("http://localhost:3000/messages")
        .then(res => res.json())
        .then(json => dispatch(putMessages(json)));
}
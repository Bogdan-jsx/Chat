import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { messagesReducer } from "./messages/reducer";

export default combineReducers({
    userReducer,
    messagesReducer,
});
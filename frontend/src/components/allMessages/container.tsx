import React from "react";
import { AllMessages } from "./index";
import { connect } from "react-redux";
import { MessageType, addMessage } from '../../store/messages/actions';
import { Socket } from 'socket.io-client';

interface Props {
    messages: MessageType[],
    addMessage: (message: MessageType) => void,
    socket: Socket,
}

const AllMessagesContainer: React.FC<Props> = (props) => ( <AllMessages {...props} /> )

const mapStateToProps = (state: any) => {
    return {
        messages: state.messagesReducer.messages,
    }
}

const mapDispatchToProps = {
    addMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMessagesContainer);
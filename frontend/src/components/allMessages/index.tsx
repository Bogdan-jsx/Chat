import React, { useEffect } from "react";
import { Socket } from "socket.io-client";
import "./style.css";
import { Message } from "../message/index";
import { MessageType } from '../../store/messages/actions';

interface Props {
    messages: MessageType[],
    addMessage: (message: MessageType) => void,
    socket: Socket,
}

export const AllMessages: React.FC<Props> = ({ messages, addMessage, socket }) => {
    useEffect(() => {
        socket.on("message", (data) => {
            addMessage(data);
        })
    }, [addMessage, socket]);
    
    useEffect(() => {
        window.scrollTo(0, window.document.body.offsetHeight);
    }, [messages]);

    return (
        <div className="messages">
            {messages && messages.map(item => {
                return <Message message={item} />
            })}
        </div>
    )
}
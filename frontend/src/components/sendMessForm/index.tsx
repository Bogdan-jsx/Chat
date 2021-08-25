import React, { FormEvent, useRef } from "react";
import "./style.css";
import { Socket } from 'socket.io-client';
import { User } from "../../store/user/actions";

interface Props {
    socket: Socket,
    user: User,
}

export const SendMessForm: React.FC<Props> = ({ socket, user }) => {
    const messageInput = useRef<HTMLTextAreaElement>(null);

    const onSendButtonClick = (e: FormEvent) => {
        e.preventDefault();
        if (messageInput.current?.value) {
            const messageText = messageInput.current.value;
            messageInput.current.value = "";
            const data = { message: messageText, authorName: user.username, authorAvatar: user.avatar, sendTime: new Date() };
            socket.emit("message", data);
        }
    }

    return (
        <form className="sendMessForm">
            <textarea placeholder="Сообщение..." ref={messageInput} ></textarea>
            <button onClick={onSendButtonClick.bind(null)} >Отправить</button>
        </form>
    )
}
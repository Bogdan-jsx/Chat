import React from "react";
import "./style.css";
import { MessageType } from '../../store/messages/actions';

interface Props {
    message: MessageType,
}

export const Message: React.FC<Props> = ({ message }) => {
    let ms = Date.parse(String(message.sendTime));
    const sendTime = new Date(ms);
    let minutes = sendTime.getMinutes() < 10 ? "0" +  sendTime.getMinutes() : sendTime.getMinutes();
    let month = sendTime.getMonth() < 9 ? "0" + (sendTime.getMonth() + 1) : (sendTime.getMonth() + 1);
    let number = sendTime.getDate() < 10 ? "0" +  sendTime.getDate() : sendTime.getDate();
    const date = `${number}.${month}.${sendTime.getFullYear()} ${sendTime.getHours()}:${minutes}`;

    return (
        <div className="message">
            <img src={`http://localhost:3000/user/avatar/${message.authorId}`} alt="" />
            <div>
                <p><b>{message.authorName}</b></p>
                <p className="message-text">{message.message}</p>
                <p className="date">{date}</p>
            </div>
        </div>
    )
}
import React, { useEffect } from "react";
import io from "socket.io-client";
import "./style.css";
import AllMessagesContainer from './../../components/allMessages/container';
import SendMessContainer from './../../components/sendMessForm/container';

interface Props {
    logout: () => void,
    loadMessages: () => void,
}

const socket = io("http://localhost:3000", { transports : ['websocket'] });

export const MainPage: React.FC<Props> = ({ logout, loadMessages }) => {
    useEffect(() => {
        console.log("use effect");
        loadMessages();
    }, [loadMessages]);

    const onLogoutClick = () => {
        logout();
    }

    return (
        <>
            <p>Hello world!</p>
            <button onClick={onLogoutClick.bind(null)}>Выйти</button>
            <AllMessagesContainer socket={socket} />
            <SendMessContainer socket={socket} />
        </>
    )
}
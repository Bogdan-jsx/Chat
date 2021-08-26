import React, { useEffect } from "react";
import io from "socket.io-client";
import "./style.css";
import AllMessagesContainer from './../../components/allMessages/container';
import SendMessContainer from './../../components/sendMessForm/container';
import HeaderContainer from './../../components/header/container';

interface Props {
    loadMessages: () => void,
}

const socket = io("http://localhost:3000", { transports : ['websocket'] });

export const MainPage: React.FC<Props> = ({ loadMessages }) => {
    useEffect(() => {
        loadMessages();
    }, [loadMessages]);


    return (
        <>
            <HeaderContainer />
            <AllMessagesContainer socket={socket} />
            <SendMessContainer socket={socket} />
        </>
    )
}
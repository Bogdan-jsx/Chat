import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface Props {
    logout: () => void,
}


export const Header: React.FC<Props> = ({ logout }) => {
    const onLogoutClick = () => {
        logout();
    }

    return (
        <header>
            <div id="logo">
                <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Logo" />
                <h1>Chat</h1>
            </div>
            <div id="userBlock">
                <Link to="/cabinet">Личный кабинет</Link>
                <p onClick={onLogoutClick.bind(null)}>Выйти</p>
            </div>
        </header>
    )
}
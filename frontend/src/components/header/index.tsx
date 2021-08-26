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
            <div id="userBlock" className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
                <div className="menu__box">
                    <Link to="/cabinet" className="menu__item">Личный кабинет</Link>
                    <p onClick={onLogoutClick.bind(null)} className="menu__item" >Выйти</p>
                </div>
            </div>
        </header>
    )
}
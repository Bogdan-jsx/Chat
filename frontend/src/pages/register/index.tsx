import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const RegisterPage: React.FC = () => {
    return (
        <div className="register">
            <form action="http://localhost:3000/user/register" method="post" encType="multipart/form-data">
                <input type="text" placeholder="Имя..." name="username" />
                <input type="text" placeholder="Email..." name="email" />
                <input type="password" placeholder="Пароль..." name="password"/>
                <label>Аватар: </label>
                <input type="file" name="avatarImg" />
                <input type="submit" value="Зарегистрироваться" />
            </form>
            <p>Уже есть аккаунт?<Link to="/login" >Войти</Link></p>
        </div>
    )
}
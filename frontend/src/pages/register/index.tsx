import React from "react";
import "./style.css";

export const RegisterPage: React.FC = () => {
    return (
        <div className="register">
            <form action="http://localhost:3000/user/register" method="post">
                <input type="text" placeholder="Имя..." name="username" />
                <input type="text" placeholder="Email..." name="email" />
                <input type="password" placeholder="Пароль..." name="password"/>
                <label>Аватар: </label>
                <input type="file" name="avatarImg" />
                <input type="submit" value="Зарегистрироваться" />
            </form>
        </div>
    )
}
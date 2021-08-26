import React, { FormEvent, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import "./style.css";

interface Props {
    login: (email: string, password: string) => void;
}

export const LoginPage: React.FC<Props> = ({ login }) => {
    console.log(login);
    const history = useHistory();

    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("onsubmit");
        const email = emailInput.current?.value;
        const password = passwordInput.current?.value;
        if (email && password) {
            console.log("onsubmit 2");
            login(email, password);
            history.push("/home");
        }
    }

    return (
        <div className="login">
            <form onSubmit={onSubmit.bind(null)}>
                <input type="text" placeholder="Email..." name="email" ref={emailInput} required />
                <input type="password" placeholder="Пароль..." name="password" ref={passwordInput} required />
                <input type="submit" value="Войти" className="submitButton" />
            </form>
            <p>Нету аккаунта? <Link to="/register" >Зарегистрироваться</Link></p>
        </div>
    )
}
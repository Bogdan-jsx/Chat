import React, { useState, useRef, FormEvent } from "react";
import "./style.css";

interface Props {
    username: string,
    email: string,
    id: string,
    updateUsername: (id: string, name: string) => void,
}

export const UserInfoBlock: React.FC<Props> = ({ id, username, email, updateUsername }) => {
    const [isNameUpdating, setIsNameUpdating] = useState<boolean>(false);
    const nameInput = useRef<HTMLInputElement>(null);

    const onSubmitClick = (e: FormEvent) => {
        e.preventDefault();
        const name = nameInput.current?.value;
        if (name !== username && name) {
            updateUsername(id, name);
        }
        setIsNameUpdating(false);
    }

    return (
        <div id="userInfo">
                {!isNameUpdating ?
                    <div id="username">
                        <h2>{username}</h2>
                        <button onClick={setIsNameUpdating.bind(null, true)} className="updateNameButton" >Изменить</button>
                    </div> :
                    <>
                        <form id="username" onSubmit={onSubmitClick}>
                            <input type="text" ref={nameInput} name="username" placeholder="Новое имя..." className="updateNameInput" defaultValue={username} required />
                            <input type="submit" value="Сохранить" className="saveNameButton" />
                            <input type="button" value="Отменить" onClick={setIsNameUpdating.bind(null, false)} className="cancelNameButton" />
                        </form>
                    </>
                }
                <p className="userEmail"><b>Элеткронная почта:</b> {email}</p>
            </div>
    )
}
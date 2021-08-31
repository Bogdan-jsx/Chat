import React from "react";
import "./style.css";

interface Props {
    id: string,
}

export const AvatarBlock: React.FC<Props> = ({ id }) => {
    return (
        <div id="avatarBlock">
            <img src={`http://localhost:3000/user/avatar/${id}`} alt="avatar" />
            <form action={`/user/updateAvatar/${id}`} method="post" id="changeAvatarForm">
                <label htmlFor="newAvatarInput" className="changeAvatarLabel" >Изменить аватар</label>
                <input type="file" name="avatar" id="newAvatarInput" />
                <input type="submit" value="Сохранить" />
            </form>
        </div>
    )
}
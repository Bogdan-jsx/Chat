import React, { FormEvent, useRef } from "react";
import "./style.css";

interface Props {
    id: string,
    avatar: string,
    updateAvatar: (id: string, avatarImg: File) => void,
}

export const AvatarBlock: React.FC<Props> = ({ id, avatar, updateAvatar }) => {
    const avatarInput = useRef<HTMLInputElement>(null);

    const onSubmitClick = (e: FormEvent) => {
        e.preventDefault();
        const avatars = avatarInput.current?.files;
        if (avatars) {
            updateAvatar(id, avatars[0])
        }
    }

    return (
        <div id="avatarBlock">
            <img src={`http://localhost:3000/user/avatar/${avatar}`} alt="avatar" />
            <form id="changeAvatarForm" encType="multipart/form-data" onSubmit={onSubmitClick}>
                <label htmlFor="newAvatarInput" className="changeAvatarLabel" >Изменить аватар</label>
                <input type="file" name="avatarImg" id="newAvatarInput" ref={avatarInput} required />
                <input type="submit" value="Сохранить" />
            </form>
        </div>
    )
}
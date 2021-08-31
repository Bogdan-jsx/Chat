import React from "react";
import { User } from "../../store/user/actions";
import "./style.css";
import HeaderContainer from './../../components/header/container';
import { AvatarBlock } from "../../components/avatarBlock";
import UserInfoContainer from './../../components/userInfoBlock/container';

interface Props {
    user: User,
}

export const Cabinet: React.FC<Props> = ({ user }) => {
    return (
        <>
        <HeaderContainer />
        <div id="cabinet">
            <AvatarBlock id={user._id} />
            <UserInfoContainer username={user.username} id={user._id} email={user.email} />
        </div>
        </>
    )
}
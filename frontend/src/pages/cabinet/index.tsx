import React from "react";
import { User } from "../../store/user/actions";
import "./style.css";
import HeaderContainer from './../../components/header/container';
import UserInfoContainer from './../../components/userInfoBlock/container';
import AvatarBlockContainer from './../../components/avatarBlock/container';

interface Props {
    user: User,
}

export const Cabinet: React.FC<Props> = ({ user }) => {
    return (
        <>
        <HeaderContainer />
        <div id="cabinet">
            <AvatarBlockContainer id={user._id} avatar={user.avatar} />
            <UserInfoContainer username={user.username} id={user._id} email={user.email} />
        </div>
        </>
    )
}
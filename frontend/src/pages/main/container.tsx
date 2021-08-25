import React from "react";
import { MainPage } from "./index";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { User, logout } from "../../store/user/actions";
import { loadMessages } from "../../store/messages/actions";

interface Props {
    user: User,
    logout: () => void,
    loadMessages: () => void,
}

const MainPageContainer: React.FC<Props> = ({user, logout, loadMessages}) => {
    return user.email ? <MainPage logout={logout} loadMessages={loadMessages} /> : <Redirect to="/login" />;
};

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer.user,
    };
}

const mapDispatchToProps = {
    logout,
    loadMessages,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
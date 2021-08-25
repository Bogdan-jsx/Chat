import React from "react";
import { MainPage } from "./index";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { User } from "../../store/user/actions";
import { loadMessages } from "../../store/messages/actions";

interface Props {
    user: User,
    loadMessages: () => void,
}

const MainPageContainer: React.FC<Props> = ({user, loadMessages}) => {
    return user.email ? <MainPage loadMessages={loadMessages} /> : <Redirect to="/login" />;
};

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer.user,
    };
}

const mapDispatchToProps = {
    loadMessages,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
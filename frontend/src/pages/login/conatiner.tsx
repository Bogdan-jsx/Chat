import React from "react";
import { LoginPage } from "./index";
import { connect } from "react-redux"
import { login, /*LoginInfo, User*/ } from "../../store/user/actions";

interface Props {
    login: (email: string, password: string) => void,
}

const LoginPageContainer: React.FC<Props> = (props) => { 
    return <LoginPage {...props} />
};

const mapStateToProps = (state: any) => {
    return {};
}

const mapDispatchToProps = {
    login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
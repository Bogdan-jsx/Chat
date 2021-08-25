import React from "react";
import { Header } from "./index";
import { connect } from "react-redux";
import { logout } from './../../store/user/actions';

interface Props {
    logout: () => void,
}

const HeaderContainer: React.FC<Props> = (props) => ( <Header {...props} /> );

const mapStateToProps = (state: any) => {
    return {};
}

const mapDispatchToProps = {
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
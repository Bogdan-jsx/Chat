import React from "react";
import { UserInfoBlock } from "./index";
import { connect } from "react-redux";
import { updateUsername } from './../../store/user/actions';

interface Props {
    username: string,
    email: string,
    id: string,
    updateUsername: (id: string, name: string) => void,
}

const UserInfoContainer: React.FC<Props> = (props) => ( <UserInfoBlock {...props} /> );

const mapStateToProps = (state: any) => {
    return {};
}

const mapDispatchToProps = {
    updateUsername,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer);
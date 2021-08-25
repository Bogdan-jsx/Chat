import React from "react";
import { SendMessForm } from "./index";
import { connect } from "react-redux";
import { Socket } from 'socket.io-client';
import { User } from "../../store/user/actions";

interface Props {
    socket: Socket,
    user: User,
}

const SendMessContainer: React.FC<Props> = (props) => ( <SendMessForm {...props} /> );

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(SendMessContainer);
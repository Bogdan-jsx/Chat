import React from "react";
import { Cabinet } from "./index";
import { connect } from "react-redux";
import { User } from "../../store/user/actions";
import { Redirect } from "react-router-dom";

interface Props {
    user: User,
}

const CabinetContainer: React.FC<Props> = (props) => {
    return props.user.username ? <Cabinet {...props} /> : <Redirect to="/login" />
};

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(CabinetContainer);
import React from "react";
import { Cabinet } from "./index";
import { connect } from "react-redux";
import { User } from "../../store/user/actions";

interface Props {
    user: User,
}

const CabinetContainer: React.FC<Props> = (props) => ( <Cabinet {...props} /> );

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(CabinetContainer);
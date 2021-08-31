import React from "react";
import { AvatarBlock } from "./index";
import { connect } from "react-redux";
import { updateAvatar } from "../../store/user/actions";

interface Props {
    id: string,
    avatar: string,
    updateAvatar: (id: string, avatarImg: File) => void,
}

const AvatarBlockContainer: React.FC<Props> = (props) => ( <AvatarBlock {...props} /> )

const mapStateToProps = (state: any) => {
    return {};
}

const mapDispatchToProps = {
    updateAvatar,
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarBlockContainer);
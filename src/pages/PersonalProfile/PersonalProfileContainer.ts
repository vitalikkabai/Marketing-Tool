import {AppStateType} from "../../store/store";
import {Dispatch} from "redux";
import {S3Object} from "../../models";
import {saveProfileImage} from "../../store/Profile/ProfileActions";
import {changePassword, changePersonalInfo} from "../../store/Auth/AuthActions";
import {connect, ConnectedProps} from "react-redux";
import PersonalProfile from "./PersonalProfile";

function mapStateToProps(state: AppStateType) {
    return {
        profile: state.ProfileReducer.profile,
        avatarURL: state.ProfileReducer.avatarURL
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        saveProfileImage: (s3: S3Object, bufferImg: Buffer) => dispatch(saveProfileImage(s3, bufferImg)),
        changePassword: (oldPassword: string, newPassword: string, callback: () => void) => dispatch(changePassword(oldPassword, newPassword, callback)),
        changePersonalInfo: (name: string, email: string) => dispatch(changePersonalInfo(name, email))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PersonalProfile);
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../store/store";
import { setRoleTags } from '../../store/Employee/EmployeeActions';
import { RoleTags } from "../../models";
import Chat from './Chat';
import { CreateMessageInput, CreateProfileInput, Stage } from "../../API";
import { openDialogue, sendMessage } from "../../store/Message/MessageActions";




const mapStateToProps = (state: AppStateType) => {
    return {
        dialogue: state.MessageReducer.dialogue,
        thisProfile: state.ProfileReducer.profile,
        avatarURL: state.ProfileReducer.avatarURL
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (message: CreateMessageInput) => dispatch(sendMessage(message)),
        openDialogue: (stage: Stage, productID: string) => (
            dispatch(openDialogue(stage, productID))
        )
    }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ChatProps = ConnectedProps<typeof connector>


export default connector(Chat);
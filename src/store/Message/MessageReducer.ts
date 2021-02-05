import { CreateMessageInput, CreateProfileInput, Stage } from '../../API';
import * as actions from './MessageActions';

type MessageReducer = {
    activeConversation: {
        stage: Stage,
        productId: string,
        messages: CreateMessageInput[],
        interlocutor: CreateProfileInput
    }
    dialogue: CreateMessageInput[]
}

const initialState: MessageReducer = {
        activeConversation: {
            stage: Stage.UNASSIGNED,
            productId: 'unassigned',
            messages: [],
            interlocutor: {email: "default", name: "default"}
        },
        dialogue: []
        
};

export const EmployeeReducer = (state = initialState, action: ActionTypes): MessageReducer => {
    switch (action.type) {
        case 'SEND_NEW_MESSAGE':
            return {
                ...state,
                dialogue: [...state.dialogue,action.payload]
            }
        case 'SEND_NEW_MESSAGE_SUCCESS':
        case 'SEND_NEW_MESSAGE_FAILURE':
        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default EmployeeReducer;
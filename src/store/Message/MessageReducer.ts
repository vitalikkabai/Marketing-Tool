import { CreateMessageInput, CreateProfileInput, Stage } from '../../API';
import Message from '../../components/Chat/Message/Message';
import * as actions from './MessageActions';

type MessageReducerType = {
    stage: Stage;
    subjectID: string;
    interlocutor: CreateProfileInput;
    dialogue: CreateMessageInput[];
    interlocutorAvatarURL?: string;
};

const initialState: MessageReducerType = {
    dialogue: [],
    stage: Stage.UNASSIGNED,
    subjectID: 'unassigned',
    interlocutor: { email: 'unassigned', name: 'unassigned' },
};

export const MessageReducer = (
    state: MessageReducerType = initialState,
    action: ActionTypes
): MessageReducerType => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {
                ...state,
                dialogue: [...state.dialogue, action.payload],
            };
        case 'SEND_MESSAGE_SUCCESS': {
            const newDialog = [...state.dialogue];
            newDialog.splice(state.dialogue.length - 1, 1);
            newDialog.push(action.payload);
            return {
                ...state,
                dialogue: newDialog,
            };
        }
        case 'GET_RECENT_MESSAGE':
            if (action.payload.senderID === state.interlocutor.id)
                return {
                    ...state,
                    dialogue: [...state.dialogue, action.payload],
                };
            else return { ...state };
        case 'GET_UPDATED_MESSAGE': {
            const index = state.dialogue.findIndex(
                (message) => message.id === action.payload.id
            );
            if (!index) return { ...state };
            const newDialogue = [...state.dialogue];
            newDialogue[index] = action.payload;
            return {
                ...state,
                dialogue: newDialogue,
            };
        }

        case 'OPEN_DIALOGUE':
            return {
                ...state,
                stage: action.payload.stage,
                subjectID: action.payload.subjectID,
            };
        case 'SET_INTERLOCUTOR': {
            return {
                ...state,
                interlocutor: action.payload,
            };
        }
        case 'SET_INTERLOCUTOR_AVATAR_URL': {
            return {
                ...state,
                interlocutorAvatarURL: action.payload
            }
        }
        case 'OPEN_DIALOGUE_SUCCESS':
            return {
                ...state,
                dialogue: action.payload,
            };
        case 'SEND_MESSAGE_FAILURE':
        case 'UPDATE_MESSAGE_SUCCESS':
        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default MessageReducer;

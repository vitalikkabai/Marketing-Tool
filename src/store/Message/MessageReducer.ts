import { Subscription } from 'rxjs';
import { CreateMessageInput, CreateProfileInput, Stage } from '../../API';
import * as actions from './MessageActions';

type MessageReducerType = {
    stage?: Stage;
    subjectID?: string;
    interlocutor?: CreateProfileInput;
    dialogues: Dialogue[];
    messages: CreateMessageInput[];
    interlocutorAvatarURL?: string;
    createMessageSubscription?: Subscription;
    updateMessageSubscription?: Subscription;
};

type Dialogue = {
    stage: Stage;
    subjectID: string;
    interlocutor: CreateProfileInput;
    messages: CreateMessageInput[];
    interlocutorAvatarURL?: string; 
}

const initialState: MessageReducerType = {
    dialogues: [],
    messages:[]
    // stage: Stage.UNASSIGNED,
    // subjectID: 'unassigned',
    // interlocutor: { email: 'unassigned', name: 'unassigned' },
};

export const MessageReducer = (
    state: MessageReducerType = initialState,
    action: ActionTypes
): MessageReducerType => {
    switch (action.type) {
            // return {
            //     ...state,
            //     messages: [...state.messages, action.payload],
            // };
        // case 'SEND_MESSAGE_SUCCESS': {
        //     const newMessages = [...state.messages];
        //     newMessages.splice(state.messages.length - 1, 1);
        //     newMessages.push(action.payload);
        //     return {
        //         ...state,
        //         messages: newMessages,
        //     };
        // }
        case 'SEND_MESSAGE':
        case 'GET_RECENT_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case 'SEND_MESSAGE_SUCCESS':
        case 'GET_UPDATED_MESSAGE': {
            const index = state.messages.findIndex((message) => message.id === action.payload.id);
            if (!index) return { ...state };
            const newMessages = [...state.messages];
            newMessages[index] = action.payload;
            return {
                ...state,
                messages: newMessages,
            };
        }

        case 'SET_DIALOGUE_SUBJECT':
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
                interlocutorAvatarURL: action.payload,
            };
        }
        case 'LOAD_DIALOGUE_SUCCESS':
            return {
                ...state,
                messages: action.payload,
            };
        case 'UNSUBSCRIBE_ON_MESSAGES_CREATED_SUCCESS':
            return {
                ...state,
                createMessageSubscription: undefined,
            };
        case 'UNSUBSCRIBE_ON_MESSAGES_UPDATED_SUCCESS':
            return {
                ...state,
                updateMessageSubscription: undefined,
            };
        case 'CLEAR_DIALOGUE':
            return {
                ...state,
                interlocutor: undefined,
                messages: [],
                stage: undefined,
                subjectID: undefined
            };
        case 'LOAD_DIALOGUE':
        case 'SEND_MESSAGE_FAILURE':
        case 'UPDATE_MESSAGE_SUCCESS':
        case 'SUBSCRIBE_ON_MESSAGES_UPDATED_FAILURE':
        case 'UNSUBSCRIBE_ON_MESSAGES_CREATED_FAILURE':
        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default MessageReducer;

import { createSelector, OutputSelector } from 'reselect';
import { Subscription } from 'rxjs';
import { CreateMessageInput, CreateProfileInput, Stage } from '../../API';
import * as actions from './MessageActions';

type MessageReducerType = {
    stage: Stage;
    subjectID: string;
    interlocutor?: CreateProfileInput;
    dialogues: Dialogue[];
    sharedID: string;

    // activeDialogue?: Dialogue;
    // messages: CreateMessageInput[];
    interlocutorAvatarURL?: string;
    createMessageSubscription?: Subscription;
    updateMessageSubscription?: Subscription;
    deleteMessageSubscription?: Subscription;
};

export type Dialogue = {
    stage: Stage;
    subjectID: string;
    // interlocutor: CreateProfileInput;
    messages: CreateMessageInput[];
    // interlocutorAvatarURL?: string;
    sharedID: string;
};

const initialState: MessageReducerType = {
    dialogues: [],
    // messages:[]
    stage: Stage.UNASSIGNED,
    subjectID: '',
    sharedID: '',
};

// const getDialogues = (state:AppStateType) => state.MessageReducer.dialogues
const getSubjectID = (state: MessageReducerType) => state.subjectID;
const getStage = (state: MessageReducerType) => state.stage;
const getSharedID = (state: MessageReducerType) => state.sharedID;
const getDialogues = (state: MessageReducerType) => state.dialogues;

export const MakeActiveDialogue = (): OutputSelector<
    MessageReducerType,
    Dialogue,
    (res1: string, res2: Stage, res3: string, res4: Dialogue[]) => Dialogue
> =>
    createSelector(
        [getSubjectID, getStage, getSharedID, getDialogues],
        (subjectID, stage, sharedID, dialogues) => {
            const selectedDialogue = dialogues.find(
                (dialogue) =>
                    dialogue.sharedID === sharedID &&
                    dialogue.stage === stage &&
                    dialogue.subjectID === subjectID
            );
            if (selectedDialogue) return selectedDialogue;
            const newDialogue: Dialogue = {
                sharedID,
                stage,
                subjectID,
                messages: [],
            };
            actions.createDialogue(newDialogue);
            return newDialogue;
        }
    );
// const getActiveDialogue = MakeActiveDialogue();

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
        case 'SEND_MESSAGE': {
            // case 'GET_RECENT_MESSAGE':
            // if (!state.activeDialogue) throw 'no active dialogue';
            // const activeDialogue = getActiveDialogue(state);
            const updatedDialogueIndex = state.dialogues.findIndex((dialogue) => {
                // if (!state.activeDialogue) throw 'no active dialogue';
                return (
                    dialogue.stage === action.payload.stage &&
                    dialogue.subjectID === action.payload.subjectID &&
                    dialogue.sharedID === action.payload.sharedID
                );
            });
            if(updatedDialogueIndex === -1) throw('dialogue not found');
            const newActiveDialogue = { ...state.dialogues[updatedDialogueIndex] };
            const newDialogues = [...state.dialogues];
            newDialogues.splice(updatedDialogueIndex, 1);
            newDialogues.unshift(newActiveDialogue);
            newActiveDialogue.messages = [...newActiveDialogue.messages];
            newActiveDialogue.messages.push(action.payload);
            // const updatedDialogueIndex = state.dialogues.findIndex((dialogue) => {
            //     // if (!state.activeDialogue) throw 'no active dialogue';
            //     return (
            //         dialogue.stage === state.activeDialogue.stage &&
            //         dialogue.subjectID === state.activeDialogue.subjectID &&
            //         dialogue.sharedID === state.activeDialogue.sharedID
            //     );
            // });

            return {
                ...state,
                dialogues: newDialogues
            };
        }
        case 'SEND_MESSAGE_SUCCESS':
        case 'GET_UPDATED_MESSAGE': {
            const updatedDialogueIndex = state.dialogues.findIndex((dialogue) => {
                return (
                    dialogue.stage === action.payload.stage &&
                    dialogue.subjectID === action.payload.subjectID &&
                    dialogue.sharedID === action.payload.sharedID
                );
            });
            if (!updatedDialogueIndex) return { ...state };
            // newDialogues[updatedDialogueIndex] =
            const updatedMessageIndex = state.dialogues[updatedDialogueIndex].messages.findIndex(
                (message) => message.id === action.payload.id
            );
            if (!updatedMessageIndex) return { ...state };
            const newDialogues = [...state.dialogues];
            newDialogues[updatedDialogueIndex].messages[updatedMessageIndex] = action.payload;
            // const newMessages = [...state.messages];
            // newMessages[index] = action.payload;
            // updatedMessage
            return {
                ...state,
                dialogues: newDialogues,
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
        case 'SET_SHARED_ID': {
            return {
                ...state,
                sharedID: action.payload,
            };
        }
        case 'SET_INTERLOCUTOR_AVATAR_URL': {
            return {
                ...state,
                interlocutorAvatarURL: action.payload,
            };
        }
        case 'LOAD_DIALOGUE_SUCCESS':{
            const newDialogues = [...state.dialogues];
            const updatedDialogueIndex = newDialogues.findIndex((dialogue) => {
                return (
                    dialogue.stage === action.payload.stage &&
                    dialogue.subjectID === action.payload.subjectID &&
                    dialogue.sharedID === action.payload.sharedID
                );
            });
            if(updatedDialogueIndex === -1) {
                newDialogues.unshift(action.payload);

            } else {
                newDialogues.splice(updatedDialogueIndex, 1);
                newDialogues.unshift(action.payload);
            }
            // const newActiveDialogue = { ...state.dialogues[updatedDialogueIndex] };

            return {
                ...state,
                dialogues: newDialogues,
            };
        }
            
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
                // interlocutor: undefined,
                // messages: [],
                // stage: undefined,
                // subjectID: undefined,
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

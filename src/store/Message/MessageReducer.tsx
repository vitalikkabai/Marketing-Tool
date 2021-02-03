import { CreateMessageInput, Stage } from '../../API';
import * as actions from './MessageActions';

type MessageReducer = {
    activeConversation: {
        stage: Stage,
        messages: CreateMessageInput[]
    }
}

const initialState: MessageReducer = {
        activeConversation: {
            stage: Stage.UNASSIGNED,
            messages: []
        }
        
};

export const EmployeeReducer = (state = initialState, action: ActionTypes): MessageReducer => {
    switch (action.type) {

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
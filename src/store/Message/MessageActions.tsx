/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { CreateMessageInput } from "../../API";

export const sendNewMessage = (message: CreateMessageInput) => ({
    type: 'SEND_NEW_MESSAGE' as const,
    payload: message
});


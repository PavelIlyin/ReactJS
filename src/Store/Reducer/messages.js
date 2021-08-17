import { ADD_MESSAGE, DELETE_MESSAGE, CLEAN_CHAT } from "../Action/messages";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    messages: [
        { id: 0, author: 'Robot', text: "Hello!", chatId: null },
        { id: 1, author: 'Irina', text: "How are you?", chatId: 1 },
        { id: 2, author: 'Andrey', text: "How are you doing?", chatId: 2 },
        { id: 3, author: 'Sofia', text: "What are you doing?", chatId: 3 },
        { id: 4, author: 'Timofey', text: "Let's go for a walk?", chatId: 4 },
        { id: 5, author: 'Elena', text: "Where had you been?", chatId: 5 },
    ]
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: [...(state[action.payload.chatId] || []),
                action.payload.message
                ]
            }
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: state[action.payload.chatId].filter((item) => item.id !== action.payload.id)

            }
        }
        case CLEAN_CHAT: {
            return {
                ...state,
                [action.payload.chatId]: []
            }
        }
        default:
            return state
    }
}
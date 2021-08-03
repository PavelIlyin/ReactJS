import { ADD_MESSAGE, DELETE_MESSAGE } from "../Action/messages";

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
                messages: [...state.messages, { id: (Math.random() * 1000000).toFixed(), author: action.payload.author, text: action.payload.text, chatId: action.payload.id }]
            }
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.payload.id)
            }
        }
        default:
            return state
    }
}
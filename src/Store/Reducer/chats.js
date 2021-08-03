import { ADD_CHAT, DELETE_CHAT } from "../Action/chats";

const initialState = {
    chats: [
        { name: 'Irina', id: 1 },
        { name: 'Andrey', id: 2 },
        { name: 'Sofia', id: 3 },
        { name: 'Timofey', id: 4 },
        { name: 'Elena', id: 5 }
    ]
}

export default function chatsReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_CHAT: {
            return {
                ...state,
                chats: [...state.chats, { name: action.payload.name, id: (Math.random() * 1000000).toFixed() }]
            }
        }
        case DELETE_CHAT: {
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload.id)

            }
        }
        default:
            return state
    }
}
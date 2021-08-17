import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid';
export const ADD_MESSAGE = "MESSAGES::ADD_NESSAGE"
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE"
export const CLEAN_CHAT = "MESSAGES::CLEAN_CHAT"


export const addMessage = (message, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message,
        chatId
    }
})
export const cleanChat = (chatId) => ({
    type: CLEAN_CHAT,
    payload: {
        chatId
    }
})
export const deleteMessage = (chatId, id) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        id
    }
})

export const addMessagesDb = (chatId, message) => {
    return () => {
        firebase.database().ref('messages').child(chatId).push(message)


        let timer = setTimeout(() => {
            firebase
                .database()
                .ref('messages')
                .child(chatId)
                .push({
                    id: uuidv4(),
                    author: "Robot",
                    text: 'Good message!',
                })

            clearTimeout(timer)
        }, 1500)
    }
}

export const subscribeOnMessageChanging = (chatId) => (dispatch, getState) => {
    firebase
        .database()
        .ref('messages')
        .child(chatId)
        .on('child_added', (snapshot) => {
            dispatch(addMessage(snapshot.val(), chatId))
        })

    firebase
        .database()
        .ref('messages')
        .child(chatId)
        .on('child_changed', (snapshot) => {
            dispatch(addMessage(snapshot.val(), chatId))
        })
}

export const deleteMessageDb = (chatId, id) => (dispatch) => {
    firebase.database().ref('messages').child(chatId).child(id).remove();
    dispatch(deleteMessage(chatId, id))
}

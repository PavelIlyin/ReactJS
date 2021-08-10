export const ADD_MESSAGE = "MESSAGES::ADD_NESSAGE"
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE"


export const addMessage = (author, text, id) => ({
    type: ADD_MESSAGE,
    payload: {
        author,
        text,
        id
    }
})

export const deleteMessage = (id) => ({
    type: DELETE_MESSAGE,
    payload: {
        id
    }
})

export const addMessageWithThunk = (author, text, id) => (dispatch, getState) => {

    dispatch(addMessage(author, text, id))

    if (author !== 'Robot') {
        setTimeout(() => {
            dispatch(addMessage('Robot', 'Message sent!', +id))

        }, 1500);
    }
}

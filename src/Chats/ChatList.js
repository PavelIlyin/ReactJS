import React, { useCallback } from 'react';
import MessageForm from '../MessageForm';
import Message from '../Message';
import '../App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addMessageWithThunk, deleteMessage } from '../Store/Action/messages';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import { messagesSelector } from '../Selectors/messages';

const ChatList = (props) => {

  const params = useParams();
  const dispatch = useDispatch()
  let { messages } = useSelector(messagesSelector)
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {

    setMessageList(messages.filter((item) => item.chatId === +params.chatId))

  }, [messages])

  const handleSubmit = useCallback((newMessage, newAuthor, id) => {

    dispatch(addMessageWithThunk(newAuthor, newMessage, +params.chatId))

  }, [params.chatId, dispatch])

  const handleDeleteMessage = (id, index) => {

    setMessageList((currentMessageList) => currentMessageList.splice(index, 1))
    dispatch(deleteMessage(id))

  }

  return (
    <div className="chat-form">
      <div className="chat-message">
        <p>You are in the chat {params.chatId}</p>
        {messageList.map((item) =>
          <div className="message-block">
            <Message
              key={item.id}
              text={item.text}
              author={item.author} />
            <Button onClick={() => handleDeleteMessage(item.id, params.chatId)}>X</Button>
          </div>)}
        <hr className="chat-form_hr" />
        <MessageForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default ChatList;
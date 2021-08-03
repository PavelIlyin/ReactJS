import React from 'react';
import MessageForm from '../MessageForm';
import Message from '../Message';
import '../App.css';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { addMessage, deleteMessage } from '../Store/Action/messages';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import { messagesSelector } from '../Selectors/messages';

const ListChat = (props) => {
  const timer = useRef(null);

  const params = useParams();
  const dispatch = useDispatch()
  let { messages } = useSelector(messagesSelector)
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {

    setMessageList(messages.filter((item) => item.chatId === +params.chatId))

  }, [messages])

  useEffect(() => {

    if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {
      timer.current = setTimeout(() => {

        dispatch(addMessage('Robot', 'Good message!', +params.chatId))

      }, 1500);
    }
  }, [messageList]);

  useEffect(() => {

    return () => {
      clearTimeout(timer.current);
    }

  }, []);

  const handleSubmit = (newMessage, newAuthor, id) => {

    dispatch(addMessage(newAuthor, newMessage, +params.chatId))
  }

  const handleDeleteMessage = (message, index) => {

    setMessageList((currentMessageList) => currentMessageList.splice(index, 1))
    dispatch(deleteMessage(message.id))
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
            <Button onClick={() => handleDeleteMessage(item, params.chatId)}>X</Button>
          </div>)}
        <hr className="chat-form_hr" />
        <MessageForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default ListChat;
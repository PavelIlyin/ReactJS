import React from 'react';
import MessageForm from '../MessageForm';
import Message from '../Message';
import '../App.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { subscribeOnMessageChanging, addMessagesDb, cleanChat, deleteMessageDb } from '../Store/Action/messages';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const ChatList = (props) => {

  const params = useParams();
  const dispatch = useDispatch()

  const messageList = useSelector(state => state.messages[params.chatId] || [])


  useEffect(() => {
    console.log('in use effect selected chat')

    dispatch(cleanChat(params.chatId))
    dispatch(subscribeOnMessageChanging(params.chatId))
  }, [])

  const handleSubmit = (text, author) => {
    console.log(params)
    dispatch(addMessagesDb(params.chatId, {
      id: uuidv4(),
      author: author,
      text: text
    }))

  }

  const handleDeleteMessage = (id) => {
    dispatch(deleteMessageDb(params.chatId, id))

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
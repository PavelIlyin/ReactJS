import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { TextField, FormControl, Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import './App.css';
import Message from './Message.js';
import Chat from './Chat.js';

const outerTheme = createTheme({
  palette: {
    primary: indigo,
    secondary: indigo,
  },
  typography: {
    fontSize: 12,
  },
});

function App() {

  const user = {
    me: "User 1",
    bot: "Bot"
  };
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');
  const ask = () => setTimeout(() => {
    setMessageList(currentMessageList => ([...currentMessageList, { text: "Привет", author: user.bot }]))
  }, 1500);

  useEffect(() => {
    if (messageList.length &&
      messageList[messageList.length - 1].author !== user.bot
    ) {
      ask()
    };
    return () => {
      clearTimeout(ask);
    };
  }, [messageList]);

  const result = messageList.map((note, index) => {
    return <p key={index}>{`${note.author}: "${note.text}"`}</p>;
  });

  const handleMessageChange = (event) => {
    setValue(event.target.value);
  }

  const handleMessageSubmit = (event) => {
    event.preventDefault()
    setMessageList(currentMessageList => ([...currentMessageList, { text: value, author: user.me }]))
    setValue('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Message text="messenger" />
        <div className="App-header__window">
          <Chat />

          <div elevation={0} className="App-header__window_message">{result}

            <FormControl >
              <ThemeProvider theme={outerTheme}>
                <TextField
                  id="outlined-basic"
                  label="Введите сообщение"
                  variant="outlined"
                  autoFocus={true}
                  onChange={handleMessageChange}
                  value={value}>
                </TextField >
              </ThemeProvider>
              <Button
                onClick={handleMessageSubmit}
                variant="outlined"
                color="primary">
                Отправить
              </Button  >
            </FormControl >
          </div >
        </div >


      </header>
    </div >
  );
}

export default App;

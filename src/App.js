import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message.js';

function App() {

  let user = "User 1"
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');
  const ask = () => setTimeout(() => console.log('Сообщение отправлено!'), 1500);

  useEffect(() => {
    ask();
    return () => {
      clearTimeout(ask);
    };
  }, [messageList])

  const result = messageList.map((note, index) => {
    return <p key={index}>{`${note.author}: "${note.text}"`}</p>;
  });

  const inputReid = event => setValue(event.target.value);
  const clickerBtn = () => {
    setMessageList([...messageList, { text: value, author: user }]);
    setValue('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text="Hello, React!" />
        <div className="App-header__message">{result}</div>
        <div className="App-header__form">
          <textarea className="App-header__form_text" value={value} onChange={inputReid} />
          <button className="App-header__form_btn" onClick={clickerBtn}>SEND</button>
        </div>
      </header>
    </div>
  );
}

export default App;

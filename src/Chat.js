import React, { useState } from 'react';
import { ListItem, List } from '@material-ui/core';


function Chat() {

    const [chatList, setChatList] = useState([
        { id: 212, name: "Георгий" },
        { id: 232, name: "Светлана" },
        { id: 236, name: "Сергей" },
        { id: 111, name: "Ирина" },
        { id: 238, name: "Иван" }]);
    const chatRender = chatList.map((item) => {
        return <ListItem button key={item.id}> {`"${item.name}"`}</ListItem>;
    });

    return (
        <div className="Chat">
            <List> {chatRender}</List>
        </div>
    );
}

export default Chat;
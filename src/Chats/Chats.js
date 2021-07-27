import '../App.css';
import { useState, useEffect } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';



const Chats = () => {

    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        setChatList([
            { name: 'Ирина', id: 'ch01' },
            { name: 'Тимофей', id: 'ch02' },
            { name: 'София', id: 'ch03' },
            { name: 'Андрей', id: 'ch04' }
        ]);
    }, []);

    return (
        <List>{chatList.map((chat) =>
            <ListItem key={chat.id} >
                <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
            </ListItem>)}
        </List>
    )
};

export default Chats;
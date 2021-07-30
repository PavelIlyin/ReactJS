import '../App.css';
import { useState, useEffect } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Chats = () => {

    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        setChatList([
            { name: 'Irina', id: 'ch01' },
            { name: 'Andrey', id: 'ch02' },
            { name: 'Sofia', id: 'ch03' },
            { name: 'Timofey', id: 'ch04' }
        ]);
    }, []);

    return (
        <div className="Chat">
            <List >{chatList.map((item) =>
                <ListItem key={item.id} >
                    <Link className="Chat__list" to={`/chats/${item.id}`}>{item.name}</Link>
                </ListItem>)}
            </List>
        </div>
    )
};

export default Chats;
import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';
import App from '../App.js';
import Chats from '../Chats/Chats';
import ChatList from '../Chats/ChatList';
import Profile from '../Profile/Profile.js';
import Gists from '../Gists/Gists.js';

export default function Router() {
    return (
        <div>
            <div className="App header-div">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/gists">Gists</Link>
            </div>

            <Switch>
                <Route path="/" exact component={App} />
                <Route exact path="/chats" render={() => <Chats />} />
                <Route path="/chats/:chatId" render={() => <ChatList />} />
                <Route path="/profile" render={() => <Profile />} />
                <Route path="/gists" render={() => <Gists />} />
                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}
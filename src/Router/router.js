import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Switch, Route } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import '../App.css';
import App from '../App.js';
import Chats from '../Chats/Chats';
import ChatList from '../Chats/ChatList';
import Profile from '../Profile/Profile.js';
import Gists from '../Gists/Gists.js';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login/login';
import Signup from '../Login/signup';
import { changeIsAuthed } from '../Store/Action/profile';

const PrivateRoute = ({ ...props }) => {
    const isAuthed = useSelector(state => state.profile.isAuthed)
    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}

export default function Router() {

    const dispatch = useDispatch()

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            dispatch(changeIsAuthed(!!user))
        })
    }, []);

    return (
        <div>
            <div className="App header-div">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/gists">Gists</Link>
                <Link to="/login">Login</Link>
            </div>

            <Switch>
                <Route path="/" exact component={App} />
                <PrivateRoute exact path="/chats" render={() => <Chats />} />
                <PrivateRoute path="/chats/:chatId" render={() => <ChatList />} />
                <PrivateRoute path="/profile" render={() => <Profile />} />
                <Route path="/gists" render={() => <Gists />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/signup" render={() => <Signup />} />
                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}
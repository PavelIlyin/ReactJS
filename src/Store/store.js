import { applyMiddleware, combineReducers, createStore } from 'redux';
import chatsReducer from './Reducer/chats';
import profileReducer from './Reducer/profile';
import messagesReducer from './Reducer/messages';
import thunk from 'redux-thunk';
import { compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import testAPIReducer from './Reducer/gists';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['messages', 'chats']
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    testAPI: testAPIReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)
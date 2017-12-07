import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {decks, cards} from './reducers';
import {persistCombineReducers, persistStore, PURGE, REHYDRATE} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import Reactotron from 'reactotron-react-native';

export const FLASHCARDS_STORAGE_KEY = 'Flashcards:deck';

const config = {
    key: FLASHCARDS_STORAGE_KEY,
    storage
};

let reducer = persistCombineReducers(config, {
    decks,
    cards
});

export const store = Reactotron.createStore(
    reducer,
    undefined,
    compose(
        applyMiddleware(
            thunk
        )
    ));

export const persistor = persistStore(store);
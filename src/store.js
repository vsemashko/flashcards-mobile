import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {decks, questions} from './reducers';

const store = createStore(
    combineReducers({
        decks,
        questions
    }),
    applyMiddleware(
        thunk
    ));

export default store;
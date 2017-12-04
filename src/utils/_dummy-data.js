import {AsyncStorage} from 'react-native';
import {DECKS_STORAGE_KEY} from '../actions/index';
import {generateId} from './helpers';

export function setDummyData() {
    const data = {
        React: {
            title: 'React',
            questions: [
                {
                    id: generateId(),
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    id: generateId(),
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    id: generateId(),
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    };

    AsyncStorage.removeItem(DECKS_STORAGE_KEY);
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    const delta = {
        ['React']: {
            questions: [{
                id: generateId(),
                question: '?',
                answer: '!'
            }]
        }
    };
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(delta))
}
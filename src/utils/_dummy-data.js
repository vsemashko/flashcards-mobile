import {AsyncStorage} from 'react-native';
import {FLASHCARDS_STORAGE_KEY} from '../store';
import {guid} from './helpers';


export function setDummyData() {
    const data = {
        React: {
            title: 'React',
            questions: [
                {
                    id: guid,
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    id: guid(),
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    id: guid(),
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    };

    AsyncStorage.removeItem(FLASHCARDS_STORAGE_KEY);
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
}
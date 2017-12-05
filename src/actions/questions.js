import {guid} from '../utils/helpers';

export const ADD_QUESTION = 'ADD_QUESTION';

export const addQuestion = (deck, question, answer) => ({
    type: ADD_QUESTION,
    payload: {
        deck,
        question: {
            id: guid(),
            question,
            answer
        }
    }
});
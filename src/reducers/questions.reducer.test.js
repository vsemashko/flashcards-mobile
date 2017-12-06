import {ADD_QUESTION, REMOVE_QUESTION} from '../actions';
import {questions} from './questions.reducer';

describe('questions reducer', () => {
    it('ADD_QUESTION adds question to questions state', () => {
        const action = {
            type: ADD_QUESTION, payload: {
                deck: 'React',
                question: {
                    id: '1',
                    question: '?',
                    answer: '!'
                }
            }
        };
        const expected = {'1': {id: '1', question: '?', answer: '!'}};
        const actual = questions({}, action);

        expect(expected).toEqual(actual);
    });

    it('REMOVE_QUESTION removes question from questions state', () => {
        const action = {type: REMOVE_QUESTION, payload: {deck: 'React', questionId: '1'}};
        const initialState = {'1': {id: '1', question: '?', answer: '!'}};

        const expected = {};
        const actual = questions(initialState, action);

        expect(expected).toEqual(actual);
    });
});
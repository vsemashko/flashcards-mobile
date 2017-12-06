import {ADD_DECK, ADD_QUESTION} from '../actions';
import {decks} from './decks.reducer';
import {REMOVE_DECK} from '../actions/decks.action';
import {REMOVE_QUESTION} from '../actions/questions.action';

describe('deck reducer', () => {
    it('ADD_DECK adds deck to decks state', () => {
        const action = {type: ADD_DECK, payload: 'React'};
        const expected = {'React': {title: 'React', questions: []}};
        const actual = decks({}, action);

        expect(expected).toEqual(actual);
    });

    it('REMOVE_DECK removes deck from decks state', () => {
        const action = {type: REMOVE_DECK, payload: 'React'};
        const initialState = {'React': {title: 'React', questions: ['1']}};

        const expected = {};
        const actual = decks(initialState, action);

        expect(expected).toEqual(actual);
    });

    it('ADD_QUESTION adds question to deck', () => {
        const addedQuestion = {id: '2', question: '?', answer: '!'};
        const action = {type: ADD_QUESTION, payload: {deck: 'React', question: addedQuestion}};
        const initialState = {'React': {title: 'React', questions: ['1']}};

        const expected = {'React': {title: 'React', questions: ['1', '2']}};
        const actual = decks(initialState, action);

        expect(expected).toEqual(actual);
    });

    it('REMOVE_QUESTION removes question from deck', () => {
        const action = {type: REMOVE_QUESTION, payload: {deck: 'React', questionId: '1'}};
        const initialState = {'React': {title: 'React', questions: ['1', '2']}};

        const expected = {'React': {title: 'React', questions: ['2']}};
        const actual = decks(initialState, action);

        expect(expected).toEqual(actual);
    });
});
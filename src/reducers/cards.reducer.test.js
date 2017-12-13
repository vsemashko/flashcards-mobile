import {ADD_CARD, REMOVE_CARD} from '../actions';
import {cards} from './cards.reducer';
import {EDIT_CARD} from '../actions/cards.action';

describe('cards reducer', () => {
    it('ADD_CARD adds card to cards state', () => {
        const action = {
            type: ADD_CARD, payload: {
                deck: 'React',
                card: {
                    id: '1',
                    question: '?',
                    answer: '!'
                }
            }
        };
        const expected = {'1': {id: '1', question: '?', answer: '!'}};
        const actual = cards({}, action);

        expect(actual).toEqual(expected);
    });

    it('REMOVE_CARD removes card from cards state', () => {
        const action = {type: REMOVE_CARD, payload: {deck: 'React', cardId: '1'}};
        const initialState = {'1': {id: '1', question: '?', answer: '!'}};

        const expected = {};
        const actual = cards(initialState, action);

        expect(actual).toEqual(expected);
    });

    it('EDIT_CARD updates card', () => {
        const action = {type: EDIT_CARD, payload: {card: {id: '1', question: '??', answer: '!!'}}};
        const initialState = {'1': {id: '1', question: '?', answer: '!'}};

        const expected = {'1': {id: '1', question: '??', answer: '!!'}};
        const actual = cards(initialState, action);

        expect(actual).toEqual(expected);
    });
});
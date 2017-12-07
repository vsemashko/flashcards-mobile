import {ADD_CARD, REMOVE_CARD} from '../actions';
import {cards} from './cards.reducer';

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

        expect(expected).toEqual(actual);
    });

    it('REMOVE_CARD removes card from cards state', () => {
        const action = {type: REMOVE_CARD, payload: {deck: 'React', cardId: '1'}};
        const initialState = {'1': {id: '1', question: '?', answer: '!'}};

        const expected = {};
        const actual = cards(initialState, action);

        expect(expected).toEqual(actual);
    });
});
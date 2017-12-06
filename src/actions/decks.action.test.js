import {ADD_DECK, REMOVE_DECK, addDeck, removeDeck} from '../actions';

describe('deck actions', () => {
    it('addDeck creates action for adding deck', () => {
        const expected = {type: ADD_DECK, payload: 'React'};
        const actual = addDeck('React');

        expect(expected).toEqual(actual);
    });

    it('removeDeck creates action for removing deck', () => {
        const expected = {type: REMOVE_DECK, payload: 'React'};
        const actual = removeDeck('React');

        expect(expected).toEqual(actual);
    });
});
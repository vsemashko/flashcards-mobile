import {ADD_DECK, addDeck, REMOVE_DECK, removeDeck} from '../actions';

describe('deck actions', () => {
    it('addDeck creates action for adding deck', () => {
        const expected = {
            type: ADD_DECK, payload: {
                deck: {
                    id: '1',
                    title: 'React'
                }
            }
        };
        const actual = addDeck('React');
        expect(actual.payload.deck).toHaveProperty('id');
        actual.payload.deck.id = '1';

        expect(actual).toEqual(expected);
    });

    it('removeDeck creates action for removing deck', () => {
        const expected = {type: REMOVE_DECK, payload: 'React'};
        const actual = removeDeck('React');

        expect(actual).toEqual(expected);
    });
});
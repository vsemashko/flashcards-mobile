import {ADD_CARD, addCard, REMOVE_CARD, removeCard} from '../actions';


describe('cards actions', () => {
    it('addCard creates action for adding card', () => {
        const expected = {
            type: ADD_CARD,
            payload: {
                deckId: '42',
                card: {
                    id: '1',
                    question: '?',
                    answer: '!'
                }
            }
        };
        const actual = addCard('42', '?', '!');
        expect(actual.payload.card).toHaveProperty('id');
        actual.payload.card.id = '1';
        expect(actual).toEqual(expected);
    });

    it('removeCard creates action for removing card', () => {
        const expected = {
            type: REMOVE_CARD, payload: {
                deckId: 'React',
                cardId: '1'
            }
        };
        const actual = removeCard('React', '1');

        expect(actual).toEqual(expected);
    });
});
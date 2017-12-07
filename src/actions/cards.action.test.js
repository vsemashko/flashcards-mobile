import {ADD_CARD, addCard, REMOVE_CARD, removeCard} from '../actions';


describe('cards actions', () => {
    it('addCard creates action for adding card', () => {
        const expected = {
            type: ADD_CARD,
            payload: {
                deck: 'React',
                card: {
                    id: '1',
                    question: '?',
                    answer: '!'
                }
            }
        };
        const actual = addCard('React', '?', '!');
        expect(actual.payload.card).toHaveProperty('id');
        actual.payload.card.id = '1';
        expect(expected).toEqual(actual);
    });

    it('removeCard creates action for removing card', () => {
        const expected = {
            type: REMOVE_CARD, payload: {
                deck: 'React',
                cardId: '1'
            }
        };
        const actual = removeCard('React', '1');

        expect(expected).toEqual(actual);
    });
});
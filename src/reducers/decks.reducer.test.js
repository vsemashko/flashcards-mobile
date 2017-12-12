import {ADD_CARD, ADD_DECK} from '../actions';
import {decks} from './decks.reducer';
import {REMOVE_DECK, RENAME_DECK} from '../actions/decks.action';
import {REMOVE_CARD} from '../actions/cards.action';

describe('deck reducer', () => {
    it('ADD_DECK adds deck to decks state', () => {
        const action = {type: ADD_DECK, payload: {deck: {id: '42', title: 'React'}}};
        const expected = {'42': {id: '42', title: 'React', cards: []}};
        const actual = decks({}, action);

        expect(actual).toEqual(expected);
    });

    it('REMOVE_DECK removes deck from decks state', () => {
        const action = {type: REMOVE_DECK, payload: '42'};
        const initialState = {'42': {id: '42', title: 'React', cards: ['1']}};

        const expected = {};
        const actual = decks(initialState, action);

        expect(actual).toEqual(expected);
    });

    it('RENAME_DECK changes deck title', () => {
        const action = {type: RENAME_DECK, payload: {deckId: '42', deckTitle: 'React'}};
        const initialState = {'42': {id: '42', title: 'R', cards: ['1', '2']}};

        const expected = {'42': {id: '42', title: 'React', cards: ['1', '2']}};
        const actual = decks(initialState, action);

        expect(actual).toEqual(expected);
    });

    it('ADD_CARD adds card to deck', () => {
        const addedCard = {id: '2', question: '?', answer: '!'};
        const action = {type: ADD_CARD, payload: {deckId: '42', card: addedCard}};
        const initialState = {'42': {id: '42', title: 'React', cards: ['1']}};

        const expected = {'42': {id: '42', title: 'React', cards: ['1', '2']}};
        const actual = decks(initialState, action);

        expect(actual).toEqual(expected);
    });

    it('REMOVE_CARD removes card from deck', () => {
        const action = {type: REMOVE_CARD, payload: {deckId: '42', cardId: '1'}};
        const initialState = {'42': {id: '42', title: 'React', cards: ['1', '2']}};

        const expected = {'42': {id: '42', title: 'React', cards: ['2']}};
        const actual = decks(initialState, action);

        expect(actual).toEqual(expected);
    });
});
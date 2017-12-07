import {ADD_DECK, ADD_CARD} from '../actions';
import {decks} from './decks.reducer';
import {REMOVE_DECK} from '../actions/decks.action';
import {REMOVE_CARD} from '../actions/cards.action';

describe('deck reducer', () => {
    it('ADD_DECK adds deck to decks state', () => {
        const action = {type: ADD_DECK, payload: 'React'};
        const expected = {'React': {title: 'React', cards: []}};
        const actual = decks({}, action);

        expect(expected).toEqual(actual);
    });

    it('REMOVE_DECK removes deck from decks state', () => {
        const action = {type: REMOVE_DECK, payload: 'React'};
        const initialState = {'React': {title: 'React', cards: ['1']}};

        const expected = {};
        const actual = decks(initialState, action);

        expect(expected).toEqual(actual);
    });

    it('ADD_CARD adds card to deck', () => {
        const addedCard = {id: '2', question: '?', answer: '!'};
        const action = {type: ADD_CARD, payload: {deck: 'React', card: addedCard}};
        const initialState = {'React': {title: 'React', cards: ['1']}};

        const expected = {'React': {title: 'React', cards: ['1', '2']}};
        const actual = decks(initialState, action);

        expect(expected).toEqual(actual);
    });

    it('REMOVE_CARD removes card from deck', () => {
        const action = {type: REMOVE_CARD, payload: {deck: 'React', cardId: '1'}};
        const initialState = {'React': {title: 'React', cards: ['1', '2']}};

        const expected = {'React': {title: 'React', cards: ['2']}};
        const actual = decks(initialState, action);

        expect(expected).toEqual(actual);
    });
});
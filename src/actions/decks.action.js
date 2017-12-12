import {guid} from '../utils/helpers';

export const ADD_DECK = 'ADD_DECK';
export const RENAME_DECK = 'RENAME_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export const addDeck = (deck) => ({
    type: ADD_DECK,
    payload: {
        deck: {
            id: guid(),
            title: deck
        }
    }
});

export const renameDeck = (deckId, deckTitle) => ({
    type: RENAME_DECK,
    payload: {
        deckId,
        deckTitle
    }
});

export const removeDeck = (deckId) => ({
    type: REMOVE_DECK,
    payload: deckId
});
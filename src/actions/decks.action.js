export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export const addDeck = (deck) => ({
    type: ADD_DECK,
    payload: deck
});

export const removeDeck = (deck) => ({
    type: REMOVE_DECK,
    payload: deck
});
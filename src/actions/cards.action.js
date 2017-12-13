import {guid} from '../utils/helpers';

export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const addCard = (deckId, question, answer) => ({
    type: ADD_CARD,
    payload: {
        deckId,
        card: {
            id: guid(),
            question,
            answer
        }
    }
});

export const editCard = (card) => ({
    type: EDIT_CARD,
    payload: {
        card
    }
});

export const removeCard = (deckId, cardId) => ({
    type: REMOVE_CARD,
    payload: {
        deckId,
        cardId
    }
});
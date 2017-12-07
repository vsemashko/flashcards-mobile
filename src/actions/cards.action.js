import {guid} from '../utils/helpers';

export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const addCard = (deck, question, answer) => ({
    type: ADD_CARD,
    payload: {
        deck,
        card: {
            id: guid(),
            question,
            answer
        }
    }
});

export const removeCard = (deck, cardId) => ({
    type: REMOVE_CARD,
    payload: {
        deck,
        cardId
    }
});
import {ADD_CARD, ADD_DECK, REMOVE_CARD, REMOVE_DECK} from '../actions';
import {RENAME_DECK} from '../actions/decks.action';

export function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return addDeck(state, action);
        case REMOVE_DECK:
            return removeDeck(state, action);
        case ADD_CARD:
            return addCardToDeck(state, action);
        case RENAME_DECK:
            return renameDeck(state, action);
        case REMOVE_CARD:
            return removeCardFromDeck(state, action);
        default:
            return state;
    }
}

function addDeck(state, action) {
    const {title, id} = action.payload.deck;
    return {
        ...state,
        [id]: {
            id,
            title,
            cards: []
        }
    };
}

function addCardToDeck(state, action) {
    const {deckId, card} = action.payload;
    return {
        ...state,
        [deckId]: {
            ...state[deckId],
            cards: [
                ...state[deckId].cards,
                card.id
            ]
        }
    };
}

function renameDeck(state, action) {
    const {deckId, deckTitle} = action.payload;
    return {
        ...state,
        [deckId]: {
            ...state[deckId],
            title: deckTitle
        }
    };
}

function removeDeck(state, action) {
    const deckId = action.payload;
    const newState = {...state};
    delete newState[deckId];
    return newState;
}

function removeCardFromDeck(state, action) {
    const {deckId, cardId} = action.payload;
    return {
        ...state,
        [deckId]: {
            ...state[deckId],
            cards: state[deckId].cards.filter(card => card !== cardId)
        }
    }
}
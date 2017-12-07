import {ADD_DECK, ADD_CARD, REMOVE_DECK, REMOVE_CARD} from '../actions';

export function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return addDeck(state, action);
        case REMOVE_DECK:
            return removeDeck(state, action);
        case ADD_CARD:
            return addCardToDeck(state, action);
        case REMOVE_CARD:
            return removeCardFromDeck(state, action);
        default:
            return state;
    }
}

function addDeck(state, action) {
    const deck = action.payload;
    return {
        ...state,
        [deck]: {
            title: deck,
            cards: []
        }
    };
}

function addCardToDeck(state, action) {
    const {deck, card} = action.payload;
    return {
        ...state,
        [deck]: {
            ...state[deck],
            cards: [
                ...state[deck].cards,
                card.id
            ]
        }
    };
}

function removeDeck(state, action) {
    const deck = action.payload;
    const newState = {...state};
    delete newState[deck];
    return newState;
}

function removeCardFromDeck(state, action) {
    const {deck, cardId} = action.payload;
    return {
        ...state,
        [deck]: {
            ...state[deck],
            cards: state[deck].cards.filter(card => card !== cardId)
        }
    }
}
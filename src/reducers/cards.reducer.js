import {ADD_CARD, REMOVE_CARD} from '../actions';


export function cards(state = {}, action) {
    switch (action.type) {
        case ADD_CARD:
            return addCard(state, action);
        case REMOVE_CARD:
            return removeCard(state, action);
        default:
            return state;
    }
}

function addCard(state, action) {
    const {card} = action.payload;
    return {
        ...state,
        [card.id]: {
            ...card
        }
    }
}

function removeCard(state, action) {
    const {cardId} = action.payload;
    const newState = {...state};
    delete newState[cardId];
    return newState;
}
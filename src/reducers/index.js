import {ADD_ENTITIES} from '../actions/index';

export function decks(state = {}, action) {
    switch (action.type) {
        case ADD_ENTITIES:
            return {
                ...state,
                ...action.payload.decks
            };

        default:
            return state;
    }
}

export function questions(state = {}, action) {
    switch (action.type) {
        case ADD_ENTITIES:
            return {
                ...state,
                ...action.payload.questions
            };

        default:
            return state;
    }
}
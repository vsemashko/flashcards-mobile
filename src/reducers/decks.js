import {ADD_DECK, ADD_ENTITIES, ADD_QUESTION} from '../actions/index';

export function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return addDeck(action, state);
        case ADD_QUESTION:
            return addQuestionToDeck(action, state);
        default:
            return state;
    }
}

function addDeck(action, state) {
    const deck = action.payload;
    return {
        ...state,
        [deck]: {
            title: deck,
            questions: []
        }
    };
}

function addQuestionToDeck(action, state) {
    const {deck, question} = action.payload;
    return {
        ...state,
        [deck]: {
            ...state[deck],
            questions: [
                ...state[deck].questions,
                question.id
            ]
        }
    };
};
import {ADD_DECK, ADD_QUESTION, REMOVE_DECK, REMOVE_QUESTION} from '../actions';

export function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return addDeck(state, action);
        case REMOVE_DECK:
            return removeDeck(state, action);
        case ADD_QUESTION:
            return addQuestionToDeck(state, action);
        case REMOVE_QUESTION:
            return removeQuestionFromDeck(state, action);
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
            questions: []
        }
    };
}

function addQuestionToDeck(state, action) {
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
}

function removeDeck(state, action) {
    const deck = action.payload;
    const newState = {...state};
    delete newState[deck];
    return newState;
}

function removeQuestionFromDeck(state, action) {
    const {deck, questionId} = action.payload;
    return {
        ...state,
        [deck]: {
            ...state[deck],
            questions: state[deck].questions.filter(question => question !== questionId)
        }
    }
}
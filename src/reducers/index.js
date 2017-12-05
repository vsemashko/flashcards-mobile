import {ADD_DECK, ADD_ENTITIES, ADD_QUESTION} from '../actions/index';

export function decks(state = {}, action) {
    switch (action.type) {
        case ADD_ENTITIES:
            return {
                ...state,
                ...action.payload.decks
            };
        case ADD_DECK:
            return addDeck(action, state);
        case ADD_QUESTION:
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

export function questions(state = {}, action) {
    switch (action.type) {
        case ADD_ENTITIES:
            return {
                ...state,
                ...action.payload.questions
            };

        case ADD_QUESTION: {
            const {question} = action.payload;
            return {
                ...state,
                [question.id]: {
                    ...question
                }
            }
        }
        default:
            return state;
    }
}
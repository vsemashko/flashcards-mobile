import {ADD_QUESTION, REMOVE_QUESTION} from '../actions';


export function questions(state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return addQuestion(state, action);
        case REMOVE_QUESTION:
            return removeQuestion(state, action);
        default:
            return state;
    }
}

function addQuestion(state, action) {
    const {question} = action.payload;
    return {
        ...state,
        [question.id]: {
            ...question
        }
    }
}

function removeQuestion(state, action) {
    const {questionId} = action.payload;
    const newState = {...state};
    delete newState[questionId];
    return newState;
}
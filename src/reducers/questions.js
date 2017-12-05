import {ADD_ENTITIES, ADD_QUESTION} from '../actions';

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
            };
        }
        default:
            return state;
    }
}
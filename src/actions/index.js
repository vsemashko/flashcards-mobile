import {denormalize, normalize, schema} from 'normalizr';
import {AsyncStorage} from 'react-native';
import {guid} from '../utils/helpers';
import {FLASHCARDS_STORAGE_KEY} from '../store';


export const ADD_ENTITIES = 'ADD_ENTITIES';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

export const question = new schema.Entity('questions');
export const desk = new schema.Entity('decks', {
    questions: [question]
}, {idAttribute: 'title'});

export const addEntities = (entities) => ({
    type: ADD_ENTITIES,
    payload: entities
});

export const addDeck = (deck) => ({
    type: ADD_DECK,
    payload: deck
});

export const getDecks = () => dispatch => (
    AsyncStorage
        .getItem(FLASHCARDS_STORAGE_KEY)
        .then(response => JSON.parse(response))
        .then(decks => {

            console.log(decks);
            const entities = normalize(decks, [desk]).entities;

            dispatch(addEntities(entities));
        })
);

export const addQuestion = (deck, question, answer) => ({
    type: ADD_QUESTION,
    payload: {
        deck,
        question: {
            id: guid(),
            question,
            answer
        }
    }
});

export const addQuestionAsync = (deck, question, answer) => (dispatch, getState) => {
    const state = getState();

    dispatch(addQuestion(deck, question, answer));

    const denormalizedDeck = denormalize(deck, desk, state);

    console.log(state);


    /*return AsyncStorage
        .setItem(FLASHCARDS_STORAGE_KEY, {
            [deck]: [question]
        })*/
};
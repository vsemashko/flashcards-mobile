import {denormalize, normalize, schema} from 'normalizr';
import {AsyncStorage} from 'react-native';
import {generateId} from '../utils/helpers';

export const ADD_ENTITIES = 'ADD_ENTITIES';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

export const question = new schema.Entity('questions');
export const desk = new schema.Entity('decks', {
    questions: [question]
}, {idAttribute: 'title'});

export const DECKS_STORAGE_KEY = 'Flashcards:qwerty';

export const addEntities = (entities) => ({
    type: ADD_ENTITIES,
    payload: entities
});

export const getDecks = () => dispatch => (
    AsyncStorage
        .getItem(DECKS_STORAGE_KEY)
        .then(response => JSON.parse(response))
        .then(decks => {

            console.log(decks);
            const entities = normalize(decks, [desk]).entities;

            dispatch(addEntities(entities));

            dispatch(addQuestion('React', {
                id: generateId(),
                question: '?',
                answer: '!'
            }));
        })
);

export const addQuestion = (deck, question) => (dispatch, getState) => {
    const state = getState();

    const denormalizedData = denormalize(Object.keys(state.decks), [desk], state);
    console.log(denormalizedData)

    console.log(state);



    /*return AsyncStorage
        .setItem(DECKS_STORAGE_KEY, {
            [deck]: [question]
        })*/
};
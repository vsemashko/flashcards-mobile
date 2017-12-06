import {ADD_QUESTION, addQuestion, REMOVE_QUESTION, removeQuestion} from '../actions';


describe('questions actions', () => {
    it('addQuestion creates action for adding question', () => {
        const expected = {
            type: ADD_QUESTION,
            payload: {
                deck: 'React',
                question: {
                    id: '1',
                    question: '?',
                    answer: '!'
                }
            }
        };
        const actual = addQuestion('React', '?', '!');
        expect(actual.payload.question).toHaveProperty('id');
        actual.payload.question.id = '1';
        expect(expected).toEqual(actual);
    });

    it('removeQuestion creates action for removing question', () => {
        const expected = {
            type: REMOVE_QUESTION, payload: {
                deck: 'React',
                questionId: '1'
            }
        };
        const actual = removeQuestion('React', '1');

        expect(expected).toEqual(actual);
    });
});
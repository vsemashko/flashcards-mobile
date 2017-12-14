import {StyleSheet} from 'react-native';
import {white} from '../../utils/colors';

export const editCardStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    textInput: {
        margin: 10,
        alignSelf: 'stretch',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5
    },
    questionInput: {
        marginBottom: 0,
        maxHeight: 70
    },
    answerInput: {
        maxHeight: 150
    }
});
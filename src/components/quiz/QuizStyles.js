import {StyleSheet} from 'react-native';
import {black, darkgreen, red, white} from '../../utils/colors';

export const quizStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center'
    },
    cardContainer: {
        flex: 2,
        marginTop: 40,
        margin: 10
    },
    bottomContainerSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    correctBtn: {
        backgroundColor: darkgreen,
        borderColor: darkgreen,
    },
    incorrectBtn: {
        backgroundColor: red,
        borderColor: red,
    },
    questionsCounter: {
        position: 'absolute',
        top: 10,
        left: 10
    }
});

export const quizScoreStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    score: {
        position: 'absolute',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scoreText: {
        fontSize: 24,
    },
    result: {
        margin: 10,
        fontSize: 20,
        textAlign: 'center'
    }
});

export const flipCardItemStyles = StyleSheet.create({
    flipCardContainer: {
        flex: 1,
        padding: 20,
        borderWidth: 2,
        borderColor: black,
        borderRadius: 15
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: red
    },
    content: {
        textAlign: 'center'
    }
});
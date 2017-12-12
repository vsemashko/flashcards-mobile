import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {white} from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center'
    },
    result: {
        margin: 10,
        fontSize: 22,
        textAlign: 'center'
    }
});

export function QuizScore({correctAnswersCount, totalQuestionsCount, onClose}) {
    const score = ((correctAnswersCount / totalQuestionsCount) * 100).toFixed();
    return (
        <View style={styles.container}>
            <Text style={styles.result}>You've answered {correctAnswersCount} of {totalQuestionsCount} questions correctly</Text>
            <Text style={styles.result}>Your score is {score}%</Text>
            <SubmitBtn text={'Close'} onPress={onClose} />
        </View>
    );
}

QuizScore.propTypes = {
    correctAnswersCount: PropTypes.number.isRequired,
    totalQuestionsCount: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {green, white} from '../../utils/colors';
import Pie from 'react-native-pie'


const styles = StyleSheet.create({
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

export function QuizScore({correctAnswersCount, totalQuestionsCount, onClose}) {
    const score = getScore(correctAnswersCount, totalQuestionsCount);

    return (
        <View style={styles.container}>
            <View>
                <Pie radius={50}
                     innerRadius={45}
                     series={[score]}
                     colors={[green]}
                     backgroundColor='#ddd'/>
                <View style={styles.score}>
                    <Text style={styles.scoreText}>{score}%</Text>
                </View>
            </View>
            <Text style={styles.result}>You've answered {correctAnswersCount} of {totalQuestionsCount} questions correctly</Text>
            <SubmitBtn text={'Close'} onPress={onClose}/>
        </View>
    );
}

function getScore(correctAnswersCount, totalQuestionsCount) {
    const strScore = ((correctAnswersCount / totalQuestionsCount) * 100).toFixed();
    return parseInt(strScore, 10);
}

QuizScore.propTypes = {
    correctAnswersCount: PropTypes.number.isRequired,
    totalQuestionsCount: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired
};
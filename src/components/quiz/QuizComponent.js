import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SubmitBtn} from '../form-controls/SubmitBtn';
import {darkgreen, red, white} from '../../utils/colors';
import {QuizScore} from './QuizScore';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center'
    },
    topContainerSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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

class QuizComponent extends React.Component {
    state = {
        currentCardIndex: 0,
        correctAnswersCount: 0,
        isQuestion: true,
        isScoreScreen: false
    };

    submitQuestion(isCorrect) {
        const {cards} = this.props;
        const {currentCardIndex, correctAnswersCount} = this.state;
        const newCorrectAnswersCount = isCorrect ? correctAnswersCount + 1 : correctAnswersCount;

        if (currentCardIndex === cards.length - 1) {
            this.setState({
                isScoreScreen: true,
                correctAnswersCount: newCorrectAnswersCount
            })
        } else {
            this.setState({
                currentCardIndex: currentCardIndex + 1,
                correctAnswersCount: newCorrectAnswersCount
            })
        }
    }

    render() {
        const {cards, goBack} = this.props;
        const {currentCardIndex, isQuestion, isScoreScreen, correctAnswersCount} = this.state;

        if (cards.length === 0) return <Text>NONE</Text>;
        if (isScoreScreen) return <QuizScore correctAnswersCount={correctAnswersCount} totalQuestionsCount={cards.length} onClose={goBack}/>;

        const currentCard = cards[currentCardIndex];

        return (
            <View style={styles.container}>
                <Text style={styles.questionsCounter}>{currentCardIndex + 1}/{cards.length}</Text>
                <TouchableOpacity style={styles.topContainerSection} onPress={() => this.setState({isQuestion: !isQuestion})}>
                    <Text style={styles.title}>{isQuestion ? currentCard.question : currentCard.answer}</Text>
                    <Text>{isQuestion ? 'Question' : 'Answer'}</Text>
                </TouchableOpacity>
                <View style={styles.bottomContainerSection}>
                    <SubmitBtn text={'Correct'} onPress={() => this.submitQuestion(true)} buttonStyle={styles.correctBtn}/>
                    <SubmitBtn text={'Incorrect'} onPress={() => this.submitQuestion(false)} buttonStyle={styles.incorrectBtn}/>
                </View>
            </View>
        );
    }
}

function mapStateToProps({decks, cards}, {navigation}) {
    const {deckId} = navigation.state.params;
    return {
        cards: decks[deckId].cards.map(card => cards[card])
    };
}

function mapDispatchToProps(dispatch, {navigation}) {
    return {
        goBack: () => navigation.goBack()
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizComponent);